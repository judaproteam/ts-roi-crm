export default function TextInput({
  field = '',
  lbl = '',
  type = 'text',
  required = true,
  className = '',
  info = '',
  placeholder = '',
  defaultValue,
  autoFocus = false,
}: any) {
  return (
    <label className={`input ${className}`}>
      <div>
        <p>{lbl}</p>
        {info && <i>{info}</i>}
      </div>
      <input
        onChange={(e) => {
          e.target.setCustomValidity('')
        }}
        type={type}
        name={field}
        required={required}
        defaultValue={defaultValue}
        min={1}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onInvalid={(e) => (e as any).target.setCustomValidity('שדה חובה')}
      />
    </label>
  )
}
