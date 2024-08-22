import { Role } from '@prisma/client'

export type TmpPart = {
  id: number
  name: string
  qntt: number
  desc: string
  tasksId?: number
  prjId?: number
}

export type MainTask = {
  id: number
  title: string
  desc: string
  pic: boolean
  vid: boolean
  mngr: boolean
  order: number
  tasksId: number
  prjId: number
}

export type User = {
  id: number
  email: string
  role: Role
  name: string
  companyId: number
  projects: {
    id: number
    name: string
  }[]
  picture?: string
  expires?: string
  iat?: number
  exp?: number
}
