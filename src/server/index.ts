import express from 'express'
import cors from 'cors'
import authRouter from './routers/auth/index.js'

const server = express()

server.use(cors() )
server.use(express.json() )
server.use('/api', authRouter)



async function start() {
  try {
    server.listen(3000, () => {
      console.log('[server]: started')
    })
  } catch(err) {
    console.log('err: ', err)
  }

}



start()
