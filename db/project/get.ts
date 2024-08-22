import { getUser } from '@/auth/authFuncs'
import { db } from '../db'

export async function getUserProjects() {
  const user = await getUser()

  const projects = await db.project.findMany({
    where: { users: { some: { id: user?.id } } },
  })

  return projects
}
