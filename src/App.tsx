import { Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

import { routes } from '@/routes'

function App() {
  const Routes = () => useRoutes(routes)
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
