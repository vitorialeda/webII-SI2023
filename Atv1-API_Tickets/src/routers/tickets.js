import { create } from "../crontollers/tickets/create.js"
import { get } from "../crontollers/tickets/get.js"
import { update } from "../crontollers/tickets/update.js"
import { close } from "../crontollers/tickets/close.js"
import { delete_ticket } from "../crontollers/tickets/delete.js"

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
    },
    {
        method: 'PUT',
        path: '/tickets',
        controller: update
    },
    {
        method: 'PATCH',
        path: '/tickets',
        controller: close
    },
    {
        method: "DELETE",
        path: '/tickets',
        controller: delete_ticket
    }
]