'use client'

import Script from 'next/script'
import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react'
import { checkUser } from './authFuncs'
import { useRouter } from 'next/navigation'
import { useUser } from '@/utils/userCtx'
import { showPop } from 'jude_ui/pop'

declare global {
  const google: any
}

export default function Login() {
  const router = useRouter()
  const u = useUser()

  useEffect(() => {
    try {
      if (google) initGoogle()
    } catch (error) {}

    if (u) router.push('/')
  }, [])

  // GOOGLE LOGIN
  const client_id = process.env.NEXT_PUBLIC_GGLID

  async function callback(gglUser) {
    showPop({ msg: 'מתבצע אימות לחשבון Google', icon: 'loading' })
    let user = null as any
    try {
      user = jwtDecode(gglUser.credential)

      const res = await checkUser({
        email: user?.email,
        gglName: user.name,
        picture: user.picture,
        gglSub: user.sub,
      })

      showPop(res as any)

      console.log('client user', user)
    } catch (error) {
      console.log('error', error)
    }
  }

  function initGoogle() {
    google.accounts.id.initialize({
      client_id,
      callback,
    })

    // google.accounts.id.prompt()
    document.getElementsByName('gglBtn').forEach((el) =>
      google.accounts.id.renderButton(el, {
        width: 250,
      })
    )

    // google.accounts.id.renderButton(document.getElementsByName(btnId)[0], {
    //   width: 250,
    // })
  }

  return (
    <div>
      <Script
        src="https://accounts.google.com/gsi/client"
        onLoad={initGoogle}
        strategy="lazyOnload"
      />

      <button name="gglBtn"></button>
    </div>
  )
}
