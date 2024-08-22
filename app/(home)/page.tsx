import Boxbtn from '@/components/Boxbtn'
import { getUserProjects } from '@/db/project/get'

export default async function my_projects() {
  const userProjects = await getUserProjects()

  console.log('userProjects', userProjects)

  return (
    <main className="flex m-6 gap-4">
      <Boxbtn txt="פרויקט חדש" icon="plus" />
      {userProjects.map((prj) => (
        <Boxbtn txt={prj.name} icon="city" prjId={prj.id} />
      ))}

      {/* <Boxbtn txt="פרויקט הדסים" icon="city" href="project" />
      <Boxbtn txt="פרויקט שרונים" icon="city" href="project" /> */}
    </main>
  )
}
