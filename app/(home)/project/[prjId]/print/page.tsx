import { getPartsSum } from '@/db/parts/get'
import PrintQr from '@/ui/PrintQr'

export default async function print({ params: { prjId } }) {
  const prtsQntt = await getPartsSum(Number(prjId))

  return <PrintQr prtsQntt={prtsQntt} prjId={prjId} />
}
