import 'dotenv/config.js'
import express from 'express'
import usersRouter from './routes/usersRouter.js'

const app = express()
const port = 8080

app.use('/users', usersRouter)

app.get('/', (req, res) => {
  res.send('api version 2.0')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
