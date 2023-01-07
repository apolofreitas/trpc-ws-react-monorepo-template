import type { Router } from 'server/src/routers/router'

import { createTRPCProxyClient, createWSClient, wsLink } from '@trpc/client'
import SuperJSON from 'superjson'

export const trpc = createTRPCProxyClient<Router>({
  transformer: SuperJSON,
  links: [
    wsLink({
      client: createWSClient({
        url: 'ws://localhost:4000',
      }),
    }),
  ],
})
