'use server'

import { revalidatePath } from 'next/cache'
import { db } from '../db'

export async function insertUser(data: any) {
  const user = await db.user.create({
    data,
  })

  revalidatePath('/users')
  return user
}
