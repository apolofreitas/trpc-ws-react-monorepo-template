import { onPong } from './onPong'

import { trpc } from '~/trpc'

export const pingQuery = trpc.procedure.query(() => {
  onPong({ msg: 'pong' })
  return 'ping'
})
