export default function useConfig() {
  return {
    siteBaseUrl: import.meta.env.VITE_SITE_BASE_URL,
    githubOauthClientId: import.meta.env.VITE_GITHUB_OAUTH_CLIENT_ID,
  }
}
