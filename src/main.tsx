import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { router } from './route'
import './index.css'

const dev = import.meta.env.DEV
const project = import.meta.env.VITE_PROJECT_NAME

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} basepath={`/${project}/`} />
    {dev && <TanStackRouterDevtools router={router} />}
  </StrictMode>,
)
