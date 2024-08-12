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
