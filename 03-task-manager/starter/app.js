const express=require('express')

const tasks=require('./routes/tasks.js')
const connectDB=require('./db/connect.js')
const notFound=require('./middleware/not-found.js')
const errorHandlerMiddleware = require('./middleware/error-handler.js')

require('dotenv').config()

const app=express()

// middlewares
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks',tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

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