import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './route'

const app = Fastify()
 
app.register(cors)
app.register(appRoutes)

app.get('/', () => {
  return 'Homepage, server running!'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running!')
})