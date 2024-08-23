'use server'

import { revalidatePath } from 'next/cache'
import { db } from '../db'

export async function deleteUser(id: number) {
  let res: any = null
  try {
    res = await db.user.delete({
      where: { id },
    })
  } catch (e: any) {
    return { failed: true, msg: 'איראה שגיאה' }
  }

  revalidatePath('/project/setup/users')
  return res
}
