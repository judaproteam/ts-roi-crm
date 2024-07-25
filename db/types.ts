export type TmpPart = {
  id: number
  name: string
  qntt: number
  dis: string
  tasksId?: number
  prjId?: number
}

export type MainTask = {
  id: number
  title: string
  dis: string
  pic: boolean
  vid: boolean
  mngr: boolean
  order: number
  tasksId: number
  prjId: number
}
