export const tickets = [
    {
        method: 'POST',
        path: '/tickets',
        controller: (req, res) => {
            res.end("Ticket criado com sucesso.")
        }
    },
    {
        method: 'GET',
        path: '/tickets',
        controller: (req, res) => {
            res.end("teste metodo get")
        }
    }
]