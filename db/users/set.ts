'use server'

import { revalidatePath } from 'next/cache'
import { db } from '../db'

export async function insertUser(data: any) {
  const user = await db.user.create({
    data: { ...data },
  })

  revalidatePath('/project/setup/users')
  return user
}

export async function insertUserNcompany(data: any) {
  const companyName = data.companyName.trim()
  delete data.companyName
  const user = await db.user.create({
    data: {
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
