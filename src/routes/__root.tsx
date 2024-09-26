import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Layout } from '../components/Layout'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => {
    const dev = import.meta.env.DEV
    console.log('dev', dev)
    return (
      <Layout>
        <Outlet />
        {dev && <TanStackRouterDevtools />}
      </Layout>
    )
  }
})
