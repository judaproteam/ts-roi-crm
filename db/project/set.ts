import { db } from '../db'

export async function addProject(data: any) {
  const projects = await db.project.create({
    data: {
      name: data.name,
      companyId: Number(data.companyId),
      userId: Number(data.userId),
    },
  })

  return projects
}
