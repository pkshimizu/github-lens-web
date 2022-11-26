import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, useRoutes } from 'react-router-dom'

import { routes } from '@/routes'
import store from '@/stores'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
  const Routes = () => useRoutes(routes)
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<>Loading...</>}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}

export default App
