/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_SITE_BASE_URL: string
  readonly VITE_API_SERVER_BASE_URL: string
  readonly VITE_GITHUB_OAUTH_CLIENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
