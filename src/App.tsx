import { Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

function App() {
  const Routes = () => useRoutes([])
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        GitHub Lens
        <Routes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
