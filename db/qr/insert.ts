'use server'

import { getServerFormData } from '@/utils/func'
import { db } from '../db'

export async function insertQr(formData: FormData) {
  const data = getServerFormData(formData) as QrData

  // data {
  //   floor: '1',
  //   aptNum: '323',
  //   locInApt: 'sdfdsf',
  //   prt: '{"id":1,"name":"א-25","dis":"פריט כללי","qntt":16,"prjId":3434343,"tasksId":6926435,"createdAt":"2024-08-08T11:05:55.771Z","updatedAt":"2024-08-08T11:08:21.601Z"}',
  //   qrNum: '2'
  // }

  // formData { floor: '-2', aptNum: '3', locInApt: 'yullo', prt: '1' }
  // data.prt = prts[data.prt]
  // data.qrNum = qrNum

  const prt = JSON.parse(data.prt)
  const tasks = await db.mainTask.findMany({
    where: {
      tasksId: prt.tasksId,
    },
  })

  const res = await db.qr.create({
    data: {
      qrNum: Number(data.qrNum),
      prjId: prt.prjId,
      floor: Number(data.floor),
      aptNum: Number(data.aptNum),
      locInApt: data.locInApt,
      part: { connect: { id: prt.id } },

      tasks: {
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

type QrData = {
  qrNum: number
  prjId: number
  floor: number
  aptNum: number
  locInApt: string
  prt: string
}
