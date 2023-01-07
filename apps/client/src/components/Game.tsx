import { trpc } from '~/lib/trpc'
import { useEffect } from 'react'

export const Game = () => {
  useEffect(() => {
    const onPongSubscription = trpc.onPong.subscribe(undefined, {
      onData: ({ msg }) => {
        console.log(msg)
      },
    })
    return () => {
      onPongSubscription.unsubscribe()
    }
  }, [])

  return (
    <button
      onClick={async () => {
        console.log(await trpc.ping.query())
      }}
    >
      event
    </button>
  )
}
