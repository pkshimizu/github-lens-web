import Button from '@/components/parts/inputs/Button'
import config from '@/config'

export default function LoginForm() {
  return (
    <Button
      href={`https://github.com/login/oauth/authorize?client_id=${config.githubOauthClientId}&scope=repo&redirect_uri=${config.siteBaseUrl}/oauth_callback`}
    >
      Sign in with GitHub
    </Button>
  )
}
