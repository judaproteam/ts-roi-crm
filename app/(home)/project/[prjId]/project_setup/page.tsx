import Icon from '@/components/Icon'
import Link from 'next/link'

export default function project_setup({ params: { prjId } }) {
  return (
    <main className="container flex m-6 gap-4">
      <Link
        href={`/project/${prjId}/project_setup/parts`}
        className="proj-btn"
        popoverTarget="projModal">
        <div>
          <Icon name="table-list" className="size-6" type="reg" />
          <p>כתב כמויות</p>
        </div>
      </Link>
      <Link
        href={`/project/${prjId}/project_setup/hatkana`}
        className="proj-btn"
        popoverTarget="projModal">
        <div>
          <Icon name="screwdriver-wrench" className="size-6" type="reg" />
          <p>שלבי ביצוע</p>
        </div>
      </Link>
      <Link
        href={`/project/${prjId}/project_setup/print`}
        className="proj-btn"
        popoverTarget="projModal">
        <div>
          <Icon name="print" className="size-6" type="reg" />
          <p>הדפסה</p>
        </div>
      </Link>
    </main>
  )
}
