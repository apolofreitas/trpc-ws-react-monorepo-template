import type { Context } from './context'

import { initTRPC } from '@trpc/server'
import SuperJSON from 'superjson'

export const trpc = initTRPC.context<Context>().create({
  transformer: SuperJSON,
  errorFormatter({ shape }) {
    return shape
  },
})
