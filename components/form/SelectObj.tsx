export default function SelectObj({
  lbl = '',
  info = '',
  field = '',
  list = [] as string[] | number[],
  onSelect = (e) => {},
  defaultValue = '',
}) {
  return (
    <label className="slct">
      <div>
        <p>{lbl}</p>
        {info && <i>{info}</i>}
      </div>
      <select name={field} onChange={onSelect} defaultValue={defaultValue}>
        {list.map((item, i) => (
          <option value={i} key={i}>
            {item}
          </option>
        ))}
      </select>
    </label>
  )
}
