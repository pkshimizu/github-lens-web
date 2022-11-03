import { Suspense } from 'react'
import {BrowserRouter, useRoutes} from "react-router-dom";
import routes from '~react-pages'

function App() {
  const Routes = () => useRoutes(routes)
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
