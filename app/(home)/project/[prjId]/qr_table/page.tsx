import { qrHeaders } from '@/components/form/table/headers'
import QrTableRows from '@/components/form/table/QrTableRows'
import Table from '@/components/form/table/Table'
import { getQrs } from '@/db/qr/get'

export default async function Page({ params: { prjId } }) {
  const qrs = await getQrs({ prjId: Number(prjId) })

  return (
    <div>
      <h2 className="text-lg font-semibold">ביצועים</h2>

      <Table headNames={qrHeaders}>
        <QrTableRows rowsData={qrs} />
      </Table>
    </div>
  )
}
