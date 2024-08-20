import { getPartsSum } from '@/db/parts/get'
import PrintQr from '@/ui/PrintQr'

export default async function print({ searchParams: { prjId } }) {
  prjId = Number(prjId)
  if (!prjId) return null

  const prtsQntt = await getPartsSum(prjId)

  return <PrintQr prtsQntt={prtsQntt} prjId={prjId} />
}
