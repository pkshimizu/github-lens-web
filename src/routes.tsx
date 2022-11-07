import { RouteObject } from 'react-router'

import PublicLayout from '@/components/layouts/PublicLayout'
import Home from '@/pages'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]
