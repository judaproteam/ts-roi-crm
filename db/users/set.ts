'use server'

import { revalidatePath } from 'next/cache'
import { db } from '../db'
import { Role } from '@prisma/client'

export async function insertUser(data: any) {
  const user = await db.user.create({
    data: { ...data },
  })

  revalidatePath('/project/setup/users')
  return user
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
