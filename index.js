import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'
import { userRouter } from './src/router/UserRouter.js'

const app = express()
const port=3000

app.use(express.json())
app.use(cors())




app.use("/api/users",userRouter)



mongoose.connect(process.env.SECRET_HASH)
    .then(() => console.log("Connected !"))
    .catch((err) => console.log("Not Connected !"))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



