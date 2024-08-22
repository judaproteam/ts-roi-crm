'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Icon, { IconNames } from 'zvijude/icon'

type Props = {
  txt: string
  href?: string
  icon: IconNames
  prjId?: any
  role?: 'btn' | 'link'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Boxbtn({ txt, href = '', icon, prjId, role = 'link', ...props }: Props) {
  if (!prjId) {
    const params = useSearchParams()
    prjId = params.get('prjId')
  }

  const flip = ['hand-holding-dollar', 'chart-mixed', 'table-list'].includes(icon)

  if (role === 'btn') {
    return (
      <button className="boxbtn" {...props}>
        <div>
          <Icon name={icon} className="size-6" type="reg" flip={flip} />
          <p>{txt}</p>
        </div>
      </button>
    )
  }

  return (
    <Link href={{ pathname: href, query: { prjId } }} className="boxbtn">
      <div>
        <Icon name={icon} className="size-6" type="reg" flip={flip} />
        <p>{txt}</p>
      </div>
    </Link>
  )
}
