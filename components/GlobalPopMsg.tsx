'use client'

import { useEffect, useState } from 'react'
import Icon from 'jude_ui/icon'

export let showPop
let popEl: HTMLElement | null = null

type PopMsg = {
  msg: string
  icon: 'success' | 'error' | 'loading' | 'ban'
}

export default function GlobalPopMsg() {
  const [pop, setPop] = useState({ msg: '', icon: 'error' })
  useEffect(() => {
    popEl = document.getElementById('globalMsg')
  }, [])

  showPop = function setValues({ msg, icon }: PopMsg) {
    setPop({ msg, icon })
    popEl?.showPopover()
  }

  return (
    <div className="popMsg" popover="auto" id="globalMsg">
      <div className="flex ps-6 pe-9 py-3 font-medium text-white">
        {icons[pop.icon]}
        <h3 className="text-lg">{pop.msg}</h3>
      </div>
    </div>
  )
}

const icons = {
  success: <Icon name="check" type="reg" className="bg-white rtl:scale-x-100 size-5.5" />,
  error: <Icon name="triangle-exclamation" type="reg" className="bg-white size-5.5" />,
  ban: <Icon name="ban" type="reg" className="bg-white size-5.5" />,
  loading: (
    <div className="size-5.5 border-2 rounded-full border-white animate-spin border-t-transparent" />
  ),
}
