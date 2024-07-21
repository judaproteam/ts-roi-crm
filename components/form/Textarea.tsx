export default function Textarea({
  field = "",
  lbl = "",
  required = true,
  className = "",
  placeholder = "",
  info = "",
  defaultValue = "",
}) {
  return (
    <label className={`input ${className}`}>
      <div>
        <p>{lbl}</p>
        {info && <i>{info}</i>}
      </div>
      <textarea
        onChange={(e) => e.target.setCustomValidity("")}
        name={field}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onInvalid={(e) => (e as any).target.setCustomValidity("שדה חובה")}
      />
    </label>
  )
}
