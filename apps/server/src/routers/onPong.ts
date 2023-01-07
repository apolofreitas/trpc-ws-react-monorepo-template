import { createSubscription } from '~/trpc/utils'

type Post = { msg: string }

export const [onPongSubscription, onPong] = createSubscription<Post>('onPong')
