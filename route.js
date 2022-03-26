module.exports = (app, databaseService) => {

    app.get('/api/people', (req, res) => {
        databaseService.getPeople()
            .then(people => res.json(people))
            .catch(e => res.status(500).send(e))
    })

    app.get('/api/users', (req, res) => {
        databaseService.getUsers()
            .then(users => res.json(users))
            .catch(e => res.status(500).send(e))
    })

    app.get('/api/lastId', (req, res) => {
        databaseService.getLastId()
            .then(id => res.send(id))
            .catch(e => res.status(500).send(e))
    })

    app.get('/api/infoUsers', (req, res) => {
        databaseService.getInfoUser()
            .then(info => res.json(info))
            .catch(e => res.status(500).send(e))
    })

    app.post('/api/people', (req, res) => {
        const person = req.body

        databaseService.insertPerson(person)
            .then(() => {
                res.json({message: "created!"})
            }).catch(e => {
                res.status(500).send(e)
            })
    })

    app.post('/api/users', (req, res) => {
        const user = req.body

        databaseService.insertUser(user)
            .then(() => {
                res.json({message: "created!"})
            }).catch(e => {
                res.status(500).send(e)
            })
    })
}