import Parts from "@/ui/Parts"
import { db } from "@/db/db"

export default async function partsPage() {
  const prts = await db.part.findMany({ orderBy: { updatedAt: "desc" } })

  return (
    <div className="">
      <Parts prts={prts} />
    </div>
  )
}

// {
//   '3763834': [
//     {
//       id: 2,
//       title: 'title1',
//       dis: 'dis1',
//       tasksId: 3763834,
//       prjId: 3434343,
//       ordr: 1,
//       pic: null,
//       vid: null,
//       mngr: null,
//       createdAt: 2024-07-19T09:34:29.402Z,
//       updatedAt: 1985-02-11T00:00:00.000Z
//     },
//     {
//       id: 4,
//       title: 'title2',
//       dis: 'dis2',
//       tasksId: 3763834,
//       prjId: 3434343,
//       ordr: 2,
//       pic: null,
//       vid: null,
//       mngr: null,
//       createdAt: 2024-07-19T09:35:58.036Z,
//       updatedAt: 2004-03-12T00:00:00.000Z
//     }
//   ]
// }
