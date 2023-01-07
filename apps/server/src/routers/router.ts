import { onPongSubscription } from './onPong'
import { pingQuery } from './ping'

import { trpc } from '~/trpc'

export const router = trpc.router({
  ping: pingQuery,
  onPong: onPongSubscription,
})

export type Router = typeof router
