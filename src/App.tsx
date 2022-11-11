import { Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import { routes } from '@/routes'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
  const Routes = () => useRoutes(routes)
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={<>Loading...</>}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
