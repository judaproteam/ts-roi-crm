'use server'

import { getServerFormData } from '@/utils/func'
import { db } from '../db'
import { getUser } from '@/auth/authFuncs'

export async function insertQr(formData: FormData) {
  const data = getServerFormData(formData) as QrData
  const user = await getUser()

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
      setupBy: user!.id,

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
