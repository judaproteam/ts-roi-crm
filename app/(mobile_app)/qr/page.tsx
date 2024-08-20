import LocForm from '@/components/mobile/LocForm'
import { db } from '@/db/db'

import { getQrCrntTask } from '@/db/qr/get'

export default async function Page({ searchParams: { prjId, qrNum } }) {
  prjId = Number(prjId)
  qrNum = Number(qrNum)

  const res = await getQrCrntTask(qrNum, prjId)
  const crntTask = res?.crntTask
  if (!crntTask) return <LocForm prjId={prjId} qrNum={qrNum} />
  if (crntTask.completed) return <div>כל המשימות הושלמו</div>

  async function taskCompleted() {
    'use server'
    const res = await db.task.update({
      where: {
        id: crntTask.id,
      },
      data: {
        completed: true,
      },
    })

    console.log('update res', res)
  }

  return (
    <div className="p-8">
      <div className="flex">
        <p className="my-2">מספר ברקוד: {qrNum}</p>
        <p className="my-2">שם הפרט {res.part.name}</p>
      </div>
      <form className="" action={taskCompleted}>
        <p className="text-xl mb-2">{crntTask.mainTask.title}</p>
        <pre>{crntTask.mainTask.desc}</pre>

        <button className="btn bg-red-700 mt-4">העלאת בעיה</button>
        <button className="btn mt-4">משימה הושלמה</button>
      </form>
    </div>
  )
}

// crntTask {
//   id: 8,
//   pic: null,
//   vid: null,
//   mngrApproved: false,
//   mainTaskId: 4882771,
//   qrId: 3,
//   completed: false,
//   createdAt: 2024-08-12T06:05:00.926Z,
//   updatedAt: 2024-08-12T06:05:00.926Z,
//   mainTask: {
//     id: 4882771,
//     title: 'משימה 11112222',
//     desc: 'sdfdsfsdfsdfsd\nsdfsdfsd',
//     tasksId: 9098861,
//     prjId: 3434343,
//     order: 0,
//     pic: true,
//     vid: true,
//     mngr: false,
//     createdAt: 2024-08-12T04:59:56.884Z,
//     updatedAt: 2024-08-12T06:34:13.939Z
//   }
// }
