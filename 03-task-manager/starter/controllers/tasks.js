
const getAllTasks=(req,res)=>{
res.send('all tasks')
}

const getTask=(req,res)=>{
    res.send('Get task')
    }

const createTask=(req,res)=>{
        res.send('create new task')
    }

const updateTask=(req,res)=>{
        res.send('update task')
    }

const deleteTask=(req,res)=>{
        res.send('delete task')
    }


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
  }