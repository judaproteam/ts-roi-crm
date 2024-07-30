'use server'

import { db } from '../db'

export async function insertQr(data) {
  const tasks = await db.mainTask.findMany({
    where: {
      tasksId: data.prt.tasksId,
    },
  })

  const res = await db.qr.create({
    data: {
      qrNum: Number(data.qrNum),
      prjId: Number(data.prt.prjId),
      floor: Number(data.floor),
      aptNum: Number(data.aptNum),
      locInApt: data.locInApt,
      part: { connect: { id: data.prt.id } },

      Tasks: {
        createMany: {
          data: tasks.map((t) => ({
            mainTaskId: t.id,
          })),
        },
      },
    },
  })
  return res
}
