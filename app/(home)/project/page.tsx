import Boxbtn from '@/components/Boxbtn'

export default function project({ searchParams: { prjId } }) {
  if (!prjId) return null

  return (
    <main className="container flex m-6 gap-4">
      <Boxbtn txt="הקמת פרויקט" icon="building-wheat" href="/project/setup" />
      <Boxbtn txt="ביצועים" icon="chart-mixed" href="/project/qr_table" />
      <Boxbtn txt="בעיות ביצוע" icon="triangle-exclamation" href="test" />
      <Boxbtn txt="בקשות חריגים" icon="hand-holding-dollar" href="test" />
    </main>
  )
}
