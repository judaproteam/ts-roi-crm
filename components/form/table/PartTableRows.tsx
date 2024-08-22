import Icon from 'zvijude/icon'

export default function PartTableRows({ rowsData, setTmpObj }) {
  return (
    <>
      {rowsData.map((row, i) => {
        return (
          <tr key={i} className="even:bg-blue-50/20">
            <td className="tblRow">{i + 1}#</td>
            <td className="tblRow">{row.name}</td>
            <td className="tblRow">{row.qntt}</td>
            <td className="tblRow">{row.desc}</td>

            <td className="tblRow float-end">
              <div className="flex gap-4">
                <button
                  className="simpleBtn-xs hover:bg-blue-50"
                  popoverTarget="editPop"
                  onClick={() => setTmpObj({ ...row })}>
                  <Icon name="pen-to-square" className="rtl:scale-x-100" />
                  <p>עריכה</p>
                </button>
                <button
                  className="simpleBtn-xs hover:bg-red-50"
                  popoverTarget="delPop"
                  onClick={() => setTmpObj({ ...row })}>
                  <Icon name="trash" />
                  <p>מחיקה</p>
                </button>
              </div>
            </td>
          </tr>
        )
      })}
    </>
  )
}
