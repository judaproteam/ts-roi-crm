'use client'

export default function QrTableRows({ rowsData }) {
  const rawClick = () => {
    document.getElementById('historyPop')?.showPopover()
  }

  return (
    <>
      {rowsData.map((row, i) => {
        return (
          <tr key={i} className="even:bg-blue-50/20" onClick={rawClick}>
            <td className="tblRow">{row.qrNum}</td>
            <td className="tblRow">{row.part.name}</td>
            <td className="tblRow">{row.floor}</td>
            <td className="tblRow">{row.aptNum}</td>
            <td className="tblRow">{row.locInApt}</td>
          </tr>
        )
      })}
    </>
  )
}

{
  /* <section className="my-4">
        <h2 className="title">משימה 1</h2>
        <p>שם המבצע: יהודה צבי</p>
        <p>22.1.24 14:22</p>
        <div className="flex gap-2 mt-2">
          <img src="https://i.imgur.com/7u8m9oP.png" alt="משימה 1" className="size-10" />
          <img src="https://i.imgur.com/7u8m9oP.png" alt="משימה 1" className="size-10" />
        </div>
      </section>
      <section className="my-4">
        <h2 className="title">משימה 1</h2>
        <p>שם המבצע: יהודה צבי</p>
        <p>22.1.24 14:22</p>
        <div className="flex gap-2 mt-2">
          <img src="https://i.imgur.com/7u8m9oP.png" alt="משימה 1" className="size-10" />
          <img src="https://i.imgur.com/7u8m9oP.png" alt="משימה 1" className="size-10" />
        </div>
      </section> */
}

// qr {
//   id: 1,
//   qrNum: 2,
//   prjId: 3434343,
//   floor: 1,
//   aptNum: 3,
//   locInApt: 'במסדרון',
//   partId: 27,
//   createdAt: 2024-07-30T07:22:18.682Z,
//   updatedAt: 2024-07-30T07:22:18.682Z,
//   Tasks: [
//     {
//       id: 1,
//       pic: null,
//       vid: null,
//       mngrApproved: false,
//       mainTaskId: 2465455,
//       qrId: 1,
//       createdAt: 2024-07-30T07:22:18.682Z,
//       updatedAt: 2024-07-30T07:22:18.682Z,
//       task: [Object]
//     },
//     {
//       id: 2,
//       pic: null,
//       vid: null,
//       mngrApproved: false,
//       mainTaskId: 6415428,
//       qrId: 1,
//       createdAt: 2024-07-30T07:22:18.682Z,
//       updatedAt: 2024-07-30T07:22:18.682Z,
//       task: [Object]
//     }
//   ],
//   part: {
//     id: 27,
//     name: 'i-44',
//     dis: 'sdfsdf',
//     qntt: 3,
//     prjId: 3434343,
//     tasksId: 9525286,
//     createdAt: 2024-07-21T06:29:27.254Z,
//     updatedAt: 2024-07-21T06:44:45.430Z
//   }
// }

// let tasks = [
//   {
//     id: 1,
//     pic: null,
//     vid: null,
//     mngrApproved: false,
//     mainTaskId: 2465455,
//     qrId: 1,
//     createdAt: 2024-07-30T07:22:18.682Z,
//     updatedAt: 2024-07-30T07:22:18.682Z,
//     task: {
//       id: 2465455,
//       title: 'sdfdsf',
//       dis: 'sdfsdf',
//       tasksId: 9525286,
//       prjId: 3434343,
//       order: 0,
//       pic: false,
//       vid: false,
//       mngr: false,
//       createdAt: 2024-07-21T06:44:45.430Z,
//       updatedAt: 2024-07-21T06:44:45.430Z
//     }
//   },
//   {
//     id: 2,
//     pic: null,
//     vid: null,
//     mngrApproved: false,
//     mainTaskId: 6415428,
//     qrId: 1,
//     createdAt: 2024-07-30T07:22:18.682Z,
//     updatedAt: 2024-07-30T07:22:18.682Z,
//     task: {
//       id: 6415428,
//       title: 'צשימה 3',
//       dis: 'דגכגדכגד',
//       tasksId: 9525286,
//       prjId: 3434343,
//       order: 1,
//       pic: false,
//       vid: true,
//       mngr: false,
//       createdAt: 2024-07-21T09:40:30.731Z,
//       updatedAt: 2024-07-21T09:40:30.731Z
//     }
//   }
// ]

// qr [
//   {
//     id: 1,
//     qrNum: 2,
//     prjId: 3434343,
//     floor: 1,
//     aptNum: 3,
//     locInApt: 'במסדרון',
//     partId: 27,
//     createdAt: 2024-07-30T07:22:18.682Z,
//     updatedAt: 2024-07-30T07:22:18.682Z,
//     Tasks: [ [Object], [Object] ],
//     part: {
//       id: 27,
//       name: 'i-44',
//       dis: 'sdfsdf',
//       qntt: 3,
//       prjId: 3434343,
//       tasksId: 9525286,
//       createdAt: 2024-07-21T06:29:27.254Z,
//       updatedAt: 2024-07-21T06:44:45.430Z
//     }
//   }
// ]
