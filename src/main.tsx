import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import {store} from './redux/store.tsx'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Route.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
      <RouterProvider router={routes}>
      </RouterProvider>
     
     </Provider>
    
  </StrictMode>,
)
