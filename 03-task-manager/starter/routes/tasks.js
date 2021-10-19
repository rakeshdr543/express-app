const express=require('express')
const router=express.Router()

const {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}=require('../controllers/tasks.js')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask)

module.exports=router