import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import useSession from '@/hooks/useSession'

export default function OAuthCallback() {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const { signIn } = useSession()
  useEffect(() => {
    if (code) {
      signIn(code)
    }
  }, [code])
  return <></>
}
