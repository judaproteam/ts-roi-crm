'use client'

import { usePathname } from 'next/navigation'

import Navbtn from '../Navbtn'

export default function SetupNav() {
  const pathname = usePathname()
  if (pathname === '/project/setup') return null

  const basePath = '/project/setup/'

  return (
    <div id="setupNav">
      <section className="nav top-10">
        <Navbtn txt="בעלי תפקידים" icon="users" href={basePath + 'users'} />
        <Navbtn txt="כתב כמויות" icon="table-list" href={basePath + 'parts'} />
        <Navbtn txt="שלבי ביצוע" icon="screwdriver-wrench" href={basePath + 'tasks'} />
        <Navbtn txt="הדפסת QR" icon="print" href={basePath + 'print'} />
      </section>
      <div className="h-10" />
    </div>
  )
}
