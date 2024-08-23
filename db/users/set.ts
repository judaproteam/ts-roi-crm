'use server'

import { revalidatePath } from 'next/cache'
import { db } from '../db'
import { Role } from '@prisma/client'
import { getUser } from '@/auth/authFuncs'

type TAddUser = {
  firstName: string
  lastName: string
  role: Role
  email: string
  phone: string | null
}

export async function addUser(prjId: number, data: TAddUser) {
  const user = await getUser()

  let res: any = null
  try {
    res = await db.user.create({
      data: {
        projects: { connect: [{ id: Number(prjId) }] },
        companyId: user!.companyId,
        ...data,
      },
    })
  } catch (e: any) {
    if (e.code === 'P2002') return { failed: true, msg: 'שגיאה, הטלפון או המייל כבר קיימים במערכת' }
    return { failed: true, msg: 'איראה שגיאה' }
  }

  revalidatePath('/project/setup/users')
  return res
}

export async function addCompany(data: any) {
  const companyName = data.companyName.trim()
  delete data.companyName

  const user = await db.user.create({
    data: {
      role: Role.ADMIN,
      ...data,

      company: {
        create: {
          name: companyName,
        },
      },
    },
  })

  revalidatePath('/project/setup/users')
  return user
}
