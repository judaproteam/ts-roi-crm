'use server'

import { revalidatePath } from 'next/cache'
import { db } from '../db'

export async function getUsers() {
  const user = await db.user.findMany()

  revalidatePath('/users')
  return user
}
