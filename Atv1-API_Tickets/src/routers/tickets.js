import { create } from "../crontollers/tickets/create.js"
import { get } from "../crontollers/tickets/get.js"

export const tickets = [
    {
        method: 'POST',
        path: '/tickets',
        controller: create
    },
    {
        method: 'GET',
        path: '/tickets',
        controller: get
    }
]