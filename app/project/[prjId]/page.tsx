'use client'

import Icon from '@/components/Icon'
import Link from 'next/link'

export default function project({ params: { prjId } }) {
  return (
    <main className="flex m-6 gap-4">
      <Link href={`/project/${prjId}/parts`} className="proj-btn" popoverTarget="projModal">
        <div>
          <Icon name="table-list" className="size-6" type="reg" />
          <p>כתב כמויות</p>
        </div>
      </Link>
      <Link href={`/project/${prjId}/hatkana`} className="proj-btn" popoverTarget="projModal">
        <div>
          <Icon name="screwdriver-wrench" className="size-6" type="reg" />
          <p>שלבי ביצוע</p>
        </div>
      </Link>
      <Link href="/users" className="proj-btn">
        <div>
          <Icon name="users" className="size-6" type="reg" />
          <p>משתמשים</p>
        </div>
      </Link>
    </main>
  )
}
