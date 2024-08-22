'use server'

import { groupBy } from '@/utils/func'
import { db } from '../db'

export async function getTasksNParts(prjId: number) {
  if (!prjId) return 'no prjId'

  const tasks = await db.mainTask.findMany({
    where: { prjId },
    orderBy: { order: 'asc' },
    select: {
      id: true,
      title: true,
      desc: true,
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

  return JSON.stringify({ grpTasks: res, parts, prtsNoGrp })
}
