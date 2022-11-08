import { Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

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
