import type { inferAsyncReturnType } from '@trpc/server'
import type { NodeHTTPCreateContextFnOptions } from '@trpc/server/dist/adapters/node-http'
import type { IncomingMessage } from 'http'
import type { WebSocket } from 'ws'

export const createContext = async (
  options: NodeHTTPCreateContextFnOptions<IncomingMessage, WebSocket>
) => {
  console.log(options)
  return {}
}
export type Context = inferAsyncReturnType<typeof createContext>
