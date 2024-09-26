import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { router } from './route'
import './index.css'

const dev = import.meta.env.DEV

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {dev && <TanStackRouterDevtools router={router} />}
  </StrictMode>,
)
