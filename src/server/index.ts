import express from 'express'
import cors from 'cors'
import authRouter from './routers/auth/index.js'
// import flatRouter from './routers/flat.js'






const port = process.env.PORT

const server = express()

server.use(cors() )
server.use(express.json() )
server.use('/api', authRouter)
// server.use('/api', flatRouter)



async function start() {
  try {
    server.listen(port, () => {
      console.log(`[server]: started on \x1b[36m%s\x1b[0m`, `http://localhost:${port}`)
    })
  } catch(err) {
    console.log('err: ', err)
  }

}



start()