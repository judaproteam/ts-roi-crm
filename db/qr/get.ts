'use server'

import { db } from '../db'

export async function getQrs({ prjId }: { prjId: number }) {
  return await db.qr.findMany({
    where: { prjId },
    include: {
      tasks: {
        include: {
          mainTask: true,
        },
      },
      part: true,
    },
  })
}

export async function getQr(qrNum, prjId) {
  return await db.qr.findUnique({
    where: {
      qrNum_prjId: { qrNum, prjId },
    },

    include: {
      tasks: {
        include: {
          mainTask: true,
        },
      },
      part: true,
    },
  })
}

export async function getQrCrntTask(qrNum: number, prjId: number) {
  const qr = await db.qr.findUnique({
    where: {
      qrNum_prjId: { qrNum, prjId },
    },

    include: {
      tasks: {
        include: {
          mainTask: true,
        },
      },
      part: true,
    },
  })

  if (!qr) return null
  return { crntTask: testComplitaion(qr?.tasks), part: qr.part, qrNum: qr.qrNum }
}

function testComplitaion(tasks) {
  tasks = sortTasks(tasks)

  for (const t of tasks) {
    if (!t.completed) return t
  }
  return { completed: true }
}

function sortTasks(tasks) {
  return tasks.sort((a, b) => {
    if (a.mainTask.order < b.mainTask.order) return -1
    if (a.mainTask.order > b.mainTask.order) return 1
  })
}

// qr:  [
//   {
//     id: 7,
//     pic: null,
//     vid: null,
//     mngrApproved: false,
//     mainTaskId: 4872454,
//     qrId: 3,
//     completed: false,
//     createdAt: 2024-08-12T06:05:00.926Z,
//     updatedAt: 2024-08-12T06:05:00.926Z,
//     mainTask: {
//       id: 4872454,
//       title: 'משימה t',
//       desc: 'sdfsdf\nsdfsdfsdf',
//       tasksId: 9098861,
//       prjId: 3434343,
//       order: 0,
//       pic: false,
//       vid: false,
//       mngr: true,
//       createdAt: 2024-08-12T04:59:56.884Z,
//       updatedAt: 2024-08-12T04:59:56.884Z
//     }
//   },
//   {
//     id: 8,
//     pic: null,
//     vid: null,
//     mngrApproved: false,
//     mainTaskId: 4882771,
//     qrId: 3,
//     completed: false,
//     createdAt: 2024-08-12T06:05:00.926Z,
//     updatedAt: 2024-08-12T06:05:00.926Z,
//     mainTask: {
//       id: 4882771,
//       title: 'משימה 11112222',
//       desc: 'sdfdsfsdfsdfsd\nsdfsdfsd',
//       tasksId: 9098861,
//       prjId: 3434343,
//       order: 1,
//       pic: true,
//       vid: true,
//       mngr: false,
//       createdAt: 2024-08-12T04:59:56.884Z,
//       updatedAt: 2024-08-12T04:59:56.884Z
//     }
//   }
// ]

// qr:  {
//   id: 3,
//   qrNum: 1,
//   prjId: 3434343,
//   floor: 1,
//   aptNum: 12,
//   locInApt: 'room 2',
//   partId: 5,
//   createdAt: 2024-08-12T06:05:00.926Z,
//   updatedAt: 2024-08-12T06:05:00.926Z,
//   tasks: [
//     {
//       id: 7,
//       pic: null,
//       vid: null,
//       mngrApproved: false,
//       mainTaskId: 4872454,
//       qrId: 3,
//       completed: false,
//       createdAt: 2024-08-12T06:05:00.926Z,
//       updatedAt: 2024-08-12T06:05:00.926Z,
//       mainTask: [Object]
//     },
//     {
//       id: 8,
//       pic: null,
//       vid: null,
//       mngrApproved: false,
//       mainTaskId: 4882771,
//       qrId: 3,
//       completed: false,
//       createdAt: 2024-08-12T06:05:00.926Z,
//       updatedAt: 2024-08-12T06:05:00.926Z,
//       mainTask: [Object]
//     }
//   ],
//   part: {
//     id: 5,
//     name: 'צ-45',
//     desc: 'דכגדכ דגכדגכד ד\nכדגכדגכ דגכדג\nכדגכדגכדגכדגכד',
//     qntt: 7,
//     prjId: 3434343,
//     tasksId: 9098861,
//     createdAt: 2024-08-12T04:58:05.122Z,
//     updatedAt: 2024-08-12T04:59:56.884Z
//   }
// }
