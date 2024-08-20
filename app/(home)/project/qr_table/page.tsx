import { qrHeaders } from '@/components/form/table/headers'
import QrTableRows from '@/components/form/table/QrTableRows'
import Table from '@/components/form/table/Table'
import { getQrs } from '@/db/qr/get'
import Icon from 'jude_ui/icon'
import Link from 'next/link'

export default async function Page({ searchParams: { prjId } }) {
  const qrs = await getQrs({ prjId: Number(prjId) })

  return (
    <div>
      <h2 className="text-lg font-semibold">ביצועים</h2>

      <div className="flex gap-4 px-8 justify-center">
        <button className="proj-btn">
          <div>
            <Icon name="table-cells" className="size-6" type="reg" />
            <p>ביצועים</p>
          </div>
        </button>

        <button className="proj-btn">
          <div>
            <Icon name="table-cells" className="size-6" type="reg" />
            <p>סריקות שבוצעו לאחרונה</p>
          </div>
        </button>

        <button className="proj-btn">
          <div>
            <Icon name="table-cells" className="size-6" type="reg" />
            <p>בהמתנה לאישור להמשך ביצוע</p>
          </div>
        </button>

        <button className="proj-btn">
          <div>
            <Icon name="table-cells" className="size-6" type="reg" />
            <p>פרטים שהושלמו</p>
          </div>
        </button>

        <button className="proj-btn">
          <div>
            <Icon name="table-cells" className="size-6" type="reg" />
            <p>משימות שאושרו לאחרונה</p>
          </div>
        </button>
      </div>

      <Table headNames={qrHeaders}>
        <QrTableRows rowsData={qrs} />
      </Table>
    </div>
  )
}
