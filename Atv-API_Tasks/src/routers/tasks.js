import { create_task } from "../controllers/tasks/create_task.js";
import { get_tasks } from "../controllers/tasks/get_tasks.js";
import { update_tasks } from "../controllers/tasks/update.js";
import { delete_task } from "../controllers/tasks/delete.js";
import { complete_task } from "../controllers/tasks/complete_task.js";

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
    },
    {
        method: 'PUT',
        path: '/tasks',
        controller: update_tasks
    },
    {
        method: 'DELETE',
        path: '/tasks',
        controller: delete_task
    },
    {
        method: 'PATCH',
        path: '/tasks',
        controller: complete_task

    }
]