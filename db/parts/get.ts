'use server'

import { sumBy } from '@/utils/func'
import { db } from '../db'

export async function getPartsByPrj(prjId: number) {
  return await db.part
    .findMany({
      where: {
        prjId,
      },
    })
    .catch((err) => {
      console.log(err)
      return []
    })
}

export async function getPartsSum(prjId: number) {
  const prts = await db.part.findMany({
    where: {
      prjId,
    },
    select: {
      qntt: true,
    },
  })

  const sum = sumBy(prts, 'qntt')
  console.log('prts: ', prts)
  return sum
}

export async function getPartsByPrjWithTasksId(prjId: number) {
  return await db.part.findMany({
    where: {
      tasksId: { not: null },
      prjId,
    },
  })
}
