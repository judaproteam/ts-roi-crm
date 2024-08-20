import Boxbtn from '@/components/Boxbtn'

export default function my_projects({ searchParams: { prjId } }) {
  console.log(prjId)
  return (
    <main className="flex m-6 gap-4">
      <Boxbtn txt="פרויקט חדש" icon="plus" />
      <Boxbtn txt="פרויקט הדסים" icon="city" href="project" />
      <Boxbtn txt="פרויקט שרונים" icon="city" href="project" />
    </main>
  )
}
