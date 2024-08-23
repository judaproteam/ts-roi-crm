'use server'

import { revalidatePath } from 'next/cache'
import { db } from '../db'
import { Role } from '@prisma/client'

type TUpdateUser = {
  id?: number
  firstName: string
  lastName: string
  role: Role
  email: string
  phone: string | null
}

export async function editUser(user: TUpdateUser) {
  const id = user.id
  delete user.id

  let res: any = null
  try {
    res = await db.user.update({
      where: { id },
      data: user,
    })
  } catch (e: any) {
    return { failed: true, msg: 'איראה שגיאה' }
  }

  revalidatePath('/project/setup/users')
  return res
}
