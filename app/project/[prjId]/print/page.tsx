import { getPartsSum } from '@/db/actions/parts'
import PrintQr from '@/ui/PrintQr'

export default async function print({ params: { prjId } }) {
  const prtsQntt = await getPartsSum(Number(prjId))

  return <PrintQr prtsQntt={prtsQntt} />
}
