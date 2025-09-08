import { create_task } from "../controllers/tasks/create_task.js"
import { get_tasks } from "../controllers/tasks/get_tasks.js"

export const tasks = [
    {
        method: 'POST',
        path: '/tasks',
        controller: create_task
    },
    {
        method: 'GET',
        path: '/tasks',
        controller: get_tasks
    }
]