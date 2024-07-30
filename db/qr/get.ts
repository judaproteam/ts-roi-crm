'use server'

import { db } from '../db'

export async function getQrs({ prjId }: { prjId: number }) {
  return await db.qr.findMany({
    where: { prjId },
    include: {
      Tasks: {
        include: {
          task: true,
        },
      },
      part: true,
    },
  })
}

export async function getQr({ qrNum, prjId }: { qrNum: number; prjId: number }) {
  return await db.qr.findUnique({
    where: {
      qrNum_prjId: { qrNum, prjId },
    },
    include: {
      Tasks: {
        include: {
          task: true,
        },
      },
      part: true,
    },
  })
}
