import { useSearchParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { sessionSignIn } from '@/stores/session'

export default function OAuthCallback() {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  if (code) {
    useRecoilValue(sessionSignIn({ code }))
  }
  return <></>
}
