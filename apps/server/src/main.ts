import { router } from './routers/router'
import { createContext } from './trpc/context'

import { applyWSSHandler } from '@trpc/server/adapters/ws'
import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({
  port: 4000,
})

const handler = applyWSSHandler({ wss, router, createContext })

console.log('✅ Server listening on ws://localhost:4000')

process.on('SIGTERM', () => {
  console.log('SIGTERM')
  handler.broadcastReconnectNotification()
  wss.close()
})
