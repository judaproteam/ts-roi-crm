'use client'

import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Icon, { IconNames } from 'zvijude/icon'
// import Icon from 'zvijude/icon'

type Props = {
  txt: string
  href?: string
  icon: IconNames
  prjId?: any
}

export default function Boxbtn({ txt, href = '', icon, prjId }: Props) {
  if (!prjId) {
    const params = useSearchParams()
    prjId = params.get('prjId')
  }

  const flip = ['hand-holding-dollar', 'chart-mixed', 'table-list'].includes(icon)

  return (
    <Link href={{ pathname: href, query: { prjId } }} className="boxbtn">
      <div>
        <Icon name={icon} className="size-6" type="reg" flip={flip} />
        <p>{txt}</p>
      </div>
    </Link>
  )
}
