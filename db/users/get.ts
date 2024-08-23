'use server'

import { revalidatePath } from 'next/cache'
import { db } from '../db'
import { getUser } from '@/auth/authFuncs'
import { Role } from '@prisma/client'

export async function getUsers({ prjId }) {
  const user = await getUser()
  if (user!.role === Role.INSTALLER) return false

  const res = await db.project.findUnique({
    where: { id: Number(prjId) },
    select: {
      users: {
        select: {
          id: true,
          name: true,
          firstName: true,
          lastName: true,
          role: true,
          email: true,
          phone: true,
        },
      },
    },
  })

  revalidatePath('/users')
  return res?.users
}
