'use server'

import { genId, groupBy } from '@/utils/func'
import { db } from '../db'
import { revalidatePath } from 'next/cache'
import getDiff from 'diff-arrays-of-objects'
import { log } from 'console'

export async function updateTasksNParts({ tasks, oldTasks, partIds, oldPartsIds }) {
  const tasksId = oldTasks[0].tasksId

  tasks = tasks.map((t, i) => {
    t.pic = t.pic ? true : false
    t.vid = t.vid ? true : false
    t.mngr = t.mngr ? true : false
    return { ...t, order: i, id: Number(t.id), tasksId, prjId: global.prjId }
  })

  const diff = getDiff(oldTasks, tasks)

  console.log(' tasks: ', tasks)
  console.log(' oldTasks: ', oldTasks)
  console.log(' diff: ', diff)

  const removeParts = oldPartsIds.filter((element) => !partIds.includes(element))
  const addParts = partIds.filter((element) => !oldPartsIds.includes(element))
  log('removeParts: ', removeParts)
  log('addParts: ', addParts)

  const idsToDelete = diff.removed.map(({ id }) => id)
  await db.$transaction([
    // update tasks
    ...diff.updated.map((tsk) => {
      return db.mainTask.update({
        where: {
          id: tsk.id,
        },
        data: tsk,
      })
    }),
    // create new tasks
    db.mainTask.createMany({
      data: diff.added,
    }),
    // delete tasks
    db.mainTask.deleteMany({
      where: {
        id: { in: idsToDelete },
      },
    }),
    // add parts
    db.part.updateMany({
      where: { id: { in: addParts } },
      data: { tasksId },
    }),

    // remove parts
    db.part.updateMany({
      where: { id: { in: removeParts } },
      data: { tasksId: null },
    }),
  ])

  revalidateProject()
  return 'updated'
}

export async function crtTasksNParts({ tasks, partIds, prjId }) {
  const tasksId = genId()

  console.log('globalThis.prjId: ', globalThis.prjId)

  tasks = tasks.map((t, i) => {
    t.pic = t.pic ? true : false
    t.vid = t.vid ? true : false
    t.mngr = t.mngr ? true : false
    return { ...t, order: i, id: Number(t.id), tasksId, prjId }
  })

  const [t, p] = await db.$transaction([
    db.mainTask.createMany({
      data: tasks,
    }),
    db.part.updateMany({
      where: {
        id: { in: partIds },
      },
      data: {
        tasksId,
      },
    }),
  ])

  revalidateProject()

  return { t, p }
}

export async function deleteTasksNParts({ tasks, partIds }) {
  await db.$transaction([
    db.mainTask.deleteMany({
      where: {
        id: { in: tasks.map((el) => el.id) },
      },
    }),
    db.part.updateMany({
      where: {
        id: { in: partIds },
      },
      data: {
        tasksId: null,
      },
    }),
  ])

  revalidateProject()
  return 'deleted'
}

export async function revalidateProject() {
  revalidatePath(`/project/${global.prjId}/hatkana`)
}
