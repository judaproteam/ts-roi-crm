"use server"

import { genId, groupBy } from "@/utils/func"
import { db } from "../db"
import { revalidatePath } from "next/cache"
import getDiff from "diff-arrays-of-objects"
import { log } from "console"

// UPDATE TASKS AND PARTS
export async function updateTasksNParts(tasks, oldTasks, partIds, oldPartsIds) {
  const tasksId = oldTasks[0].tasksId

  tasks = tasks.map((t, i) => {
    t.pic = t.pic ? true : false
    t.vid = t.vid ? true : false
    t.mngr = t.mngr ? true : false
    return { ...t, order: i, id: Number(t.id), tasksId, prjId: global.prjId }
  })

  const diff = getDiff(oldTasks, tasks)

  console.log(" tasks: ", tasks)
  console.log(" oldTasks: ", oldTasks)
  console.log(" diff: ", diff)

  const removeParts = oldPartsIds.filter((element) => !partIds.includes(element))
  const addParts = partIds.filter((element) => !oldPartsIds.includes(element))
  log("removeParts: ", removeParts)
  log("addParts: ", addParts)

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
  return "updated"
}

// CREAT NEW TASKS AND PARTS
export async function crtTasksNParts(tasks, partIds) {
  const tasksId = genId()

  tasks = tasks.map((t, i) => {
    t.pic = t.pic ? true : false
    t.vid = t.vid ? true : false
    t.mngr = t.mngr ? true : false
    return { ...t, order: i, id: Number(t.id), tasksId, prjId: global.prjId }
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

// DELETE TASKS AND PARTS
export async function deleteTasksNParts(tasks, partIds) {
  // const tasksId = tasks[0].tasksId

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
  return "deleted"
}

export async function getTasksNParts(prjId: number) {
  if (!prjId) return "no prjId"

  const tasks = await db.mainTask.findMany({
    where: { prjId },
    orderBy: { order: "asc" },
    select: {
      id: true,
      title: true,
      dis: true,
      pic: true,
      vid: true,
      mngr: true,
      order: true,
      tasksId: true,
      prjId: true,
    },
  })

  const objWithId = groupBy(tasks, ({ tasksId }) => tasksId)
  const res = Object.values(objWithId)

  const parts = await db.part.findMany({ where: { prjId } })
  const prtsNoGrp = await db.part.findMany({
    where: { tasksId: null, AND: { prjId } },
  })

  return JSON.stringify({ grpTasks: res, parts, prtsNoGrp })
}

export async function revalidateProject() {
  revalidatePath(`/project/${global.prjId}/hatkana`)
}
