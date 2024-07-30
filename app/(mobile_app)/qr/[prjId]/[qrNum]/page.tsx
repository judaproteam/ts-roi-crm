import Task1 from '@/components/mobile/LocForm'
import { getPartsByPrjWithTasksId } from '@/db/parts/get'

import { getQr } from '@/db/qr/get'

export default async function Page({ params: { prjId, qrNum } }) {
  const qr = await getQr({ qrNum: Number(qrNum), prjId: Number(prjId) })
  console.log('qr', qr)
  console.log('tasks', qr?.Tasks)

  const prts = await getPartsByPrjWithTasksId(Number(prjId))
  return (
    <div>
      <Task1 prjId={prjId} qrNum={qrNum} prts={prts} />
    </div>
  )
}
