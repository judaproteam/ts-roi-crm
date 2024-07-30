import TopMenuBtn from '@/components/TopMenuBtn'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

declare global {
  var prjId: number | null
}

export default function SetupLayout({ children, params: { prjId } }) {
  return (
    <div>
      <section className="nav top-10">
        <TopMenuBtn txt="פרויקט הדסים" icon="building" href={`/project/${prjId}`} />
        <TopMenuBtn txt="כתב כמויות" icon="table-list" href={`/project/${prjId}/parts`} />
        <TopMenuBtn txt="שלבי ביצוע" icon="screwdriver-wrench" href={`/project/${prjId}/hatkana`} />
        <TopMenuBtn txt="הדפסת QR" icon="print" href={`/project/${prjId}/print`} />
      </section>
      <div className="h-10" />
      <div>{children}</div>
    </div>
  )
}