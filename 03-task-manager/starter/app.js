const express=require('express')

const tasks=require('./routes/tasks.js')

const app=express()

app.use('/api/v1/tasks',tasks)

app.listen(5000,
    console.log('running on 5000')
)
