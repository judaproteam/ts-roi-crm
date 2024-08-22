'use server'

import { getUser } from '@/auth/authFuncs'
import { db } from '../db'
import { revalidatePath } from 'next/cache'

export async function addProject(data: FormData) {
  const user = await getUser()
  const name = data.get('name') as string

  const projects = await db.project.create({
    data: {
      name,
      companyId: user!.companyId,
      users: { connect: { id: user!.id } },
    },
  })

  revalidatePath('/')

  return projects
}
