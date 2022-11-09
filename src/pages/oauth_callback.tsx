import { useSearchParams } from 'react-router-dom'

export default function OAuthCallback() {
  const [searchParams] = useSearchParams()
  return <>{searchParams.get('code')}</>
}
