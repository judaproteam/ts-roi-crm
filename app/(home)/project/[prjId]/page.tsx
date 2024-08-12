import Icon from '@/components/Icon'
import Link from 'next/link'

export default function project({ params: { prjId } }) {
  return (
    <main className="container flex m-6 gap-4">
      <Link href={`/project/${prjId}/project_setup`} className="proj-btn">
        <div>
          <Icon name="building-circle-check" className="size-6" type="reg" />
          <p>הקמת פרויקט</p>
        </div>
      </Link>
      <Link href="/users" className="proj-btn">
        <div>
          <Icon name="users" className="size-6" type="reg" />
          <p>משתמשים</p>
        </div>
      </Link>
      <Link href={`/project/${prjId}/qr_table`} className="proj-btn">
        <div>
          <Icon name="table" className="size-6" type="reg" />
          <p>טבלת ביצועים</p>
        </div>
      </Link>
      <Link href={`/project/${prjId}/qr_table`} className="proj-btn">
        <div>
          <Icon name="triangle-exclamation" className="size-6" type="reg" />
          <p>בעיות ביצוע</p>
        </div>
      </Link>
      <Link href={`/project/${prjId}/qr_table`} className="proj-btn">
        <div>
          <Icon name="hand-holding-dollar" className="size-6" type="reg" />
          <p>בקשות חריגים</p>
        </div>
      </Link>
    </main>
  )
}
