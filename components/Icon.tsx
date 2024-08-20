export default function Icon({ name = '', type = 'lit', className = '' }) {
  const src = `https://res.cloudinary.com/dfletli2x/image/upload/icons/${type}/${name}.svg`

  return (
    <div
      className={`iconMask rtl:-scale-x-100 ${className}`}
      style={{ maskImage: `url(${src})`, WebkitMaskImage: `url(${src})` }}
    />
  )
}
