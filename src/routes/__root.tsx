import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Layout } from '../components/Layout'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
      <TanStackRouterDevtools />
    </Layout>
  ),
})
