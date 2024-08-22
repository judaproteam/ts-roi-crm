import Boxbtn from '@/components/Boxbtn'
import NewProject from '@/components/popovers/NewProject'
import { getUserProjects } from '@/db/project/get'

export default async function my_projects() {
  const userProjects = await getUserProjects()

  return (
    <>
      <main className="flex m-6 gap-4">
        <Boxbtn txt="פרויקט חדש" icon="plus" role="btn" popoverTarget="newProjectPop" />

        {userProjects.map((prj) => (
          <Boxbtn txt={prj.name} icon="city" href="project" prjId={prj.id} />
        ))}

        {/* <Boxbtn txt="פרויקט הדסים" icon="city" href="project" />
      <Boxbtn txt="פרויקט שרונים" icon="city" href="project" /> */}
      </main>

      <NewProject />
    </>
  )
}
