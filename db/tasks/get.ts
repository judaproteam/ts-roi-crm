'use server'

import { genId, groupBy } from '@/utils/func'
import { db } from '../db'
import { revalidatePath } from 'next/cache'
import getDiff from 'diff-arrays-of-objects'
import { log } from 'console'

export async function getTasksNParts(prjId: number) {
  if (!prjId) return 'no prjId'

  const tasks = await db.mainTask.findMany({
    where: { prjId },
    orderBy: { order: 'asc' },
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
    where: { AND: { prjId, tasksId: null } },
  })
  console.log('prtsNoGrp: ', prtsNoGrp)

  return JSON.stringify({ grpTasks: res, parts, prtsNoGrp })
}
