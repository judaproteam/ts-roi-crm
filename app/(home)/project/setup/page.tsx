import Boxbtn from '@/components/Boxbtn'

export default function setup({ searchParams: { prjId } }) {
  if (!prjId) return null

  return (
    <main className="container flex m-6 gap-4">
      <Boxbtn txt="כתב כמויות" icon="table-list" href="/setup/parts" />
      <Boxbtn txt="שלבי ביצוע" icon="screwdriver-wrench" href="/setup/tasks" />
      <Boxbtn txt="הדפסה" icon="print" href="/setup/print" />
      <Boxbtn txt="משתמשים" icon="users" href="/setup/users" />
    </main>
  )
}
