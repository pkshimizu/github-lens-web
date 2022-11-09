import { RouteObject } from 'react-router'

import PublicLayout from '@/components/layouts/PublicLayout'
import Home from '@/pages'
import OAuthCallback from '@/pages/oauth_callback'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'oauth_callback',
        element: <OAuthCallback />,
      },
    ],
  },
]
