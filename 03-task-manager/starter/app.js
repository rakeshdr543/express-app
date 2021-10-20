const express=require('express')

const tasks=require('./routes/tasks.js')
const connectDB=require('./db/connect.js')
require('dotenv').config()

const app=express()

app.use(express.json())

app.use('/api/v1/tasks',tasks)

const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000,
            console.log('running on 5000')
        )

    } catch (error) {
        console.log(error)
    }
}

start()