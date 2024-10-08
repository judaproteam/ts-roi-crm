import Boxbtn from '@/components/Boxbtn'

export default function setup({ searchParams: { prjId } }) {
  if (!prjId) return null

  return (
    <main className="container flex m-6 gap-4">
      <Boxbtn txt="בעלי תפקידים" icon="users" href="/project/setup/users" />
      <Boxbtn txt="כתב כמויות" icon="table-list" href="/project/setup/parts" />
      <Boxbtn txt="שלבי ביצוע" icon="screwdriver-wrench" href="/project/setup/tasks" />
      <Boxbtn txt="הדפסת QR" icon="print" href="/project/setup/print" />
    </main>
  )
}
