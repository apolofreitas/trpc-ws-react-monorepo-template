import { events } from './events'

import { trpc } from './index'

import { observable } from '@trpc/server/observable'

export const createSubscription = <TValue, TError = unknown>(name: string) => {
  const subscription = trpc.procedure.subscription(() => {
    return observable<TValue, TError>((emit) => {
      events.on(name, emit.next)

      return () => {
        events.off(name, emit.next)
      }
    })
  })
  const action = (data: TValue) => events.emit(name, data)

  return [subscription, action] as const
}
