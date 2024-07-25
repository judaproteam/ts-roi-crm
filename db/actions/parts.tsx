import { Part } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { db } from '../db'
import { sumBy } from '@/utils/func'

export async function updateCache(path: string) {
  revalidatePath(path)
}

// PARTS
export async function updatePartsTasksId(partIds: number[], tasksId: number) {
  const res = await db.part.updateMany({
    where: {
      id: { in: partIds },
    },
    data: {
      tasksId,
    },
  })

  revalidatePath(`/project/${global.prjId}`)
  return res
}

export async function crtPart(obj) {
  let res
  try {
    res = await db.part.create({
      data: {
        ...obj,
        qntt: parseInt(obj.qntt),
        prjId: global.prjId,
      },
    })
  } catch (error: any) {
    return error.message
  }

  revalidatePath(`/project/${global.prjId}`)

  return res
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

export async function getPartsByPrj(prjId: number) {
  return await db.part.findMany({
    where: {
      prjId,
    },
  })
}

export async function upPart(id: number, obj: Part) {
  const res = await db.part.update({
    where: { id },
    data: obj,
  })

  revalidatePath(`/project/${global.prjId}`)
  return res
}

export async function dltPart(id) {
  const res = await db.part.delete({
    where: { id },
  })

  revalidatePath(`/project/${global.prjId}`)
  return res
}
