export default function TaskTableRows({ rowsData }) {
  return (
    <>
      <tr>
        <td className="tblRow">0#</td>
        <td className="tblRow">סריקה</td>
        <td className="tblRow">סרוק את כל הפרטים, וקבע את סוגם ומיקומם</td>
      </tr>
      {rowsData.map((row, i) => {
        return (
          <tr key={i} className="even:bg-blue-50/20">
            <td className="tblRow">{i + 1}#</td>
            <td className="tblRow">{row.title}</td>
            <td className="tblRow">{row.dis}</td>
            <td className="tblRow">
              {row.pic && <p>חובה תמונה</p>}
              {row.vid && <p>חובה סרטון</p>}
              {row.mngr && <p>חובה אישור מנהל</p>}
            </td>
          </tr>
        )
      })}
    </>
  )
}
