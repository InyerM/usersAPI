const databaseService = () => {

    var table

    const knex = require('knex')({
        client: 'mysql',
        connection: {
            host : process.env.DB_HOST,
            port : 3306,
            user : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB,
        }
    })

    const getPeople = () => {
        table = "people"
        return knex(table).select()
    }

    const getUsers = () => {
        table = "users"
        return knex(table).select()
    }

    const getInfoUser = () => {
        table = "users"
        return knex.select('*').from(table).innerJoin('people', 'users.Id', '=', 'people.Id')
    }


    const insertPerson = ({ Names, LastNames, IdNumber, Email, IdType }) => {
        table = "people"
        return knex(table).insert({
            Names : Names,
            Lastnames : LastNames,
            IdentificationNumber : IdNumber,
            Email : Email,
            TypeOfId : IdType,
            DateOfCreation : new Date(),
            IdView : `${IdType}${IdNumber}`,
            NameView : `${Names} ${LastNames}`
        })
    }

    const insertUser = ({ Id, UserName, Password }) => {
        table = "users"
        return knex(table).insert({
            Id : Id,
            Username : UserName,
            Password : Password,
            DateOfCreated : new Date()
        })
    }

    const getLastId = () => {
        table = "people"
        return knex.select('Id').from(table).orderBy('Id', 'desc').limit(1)
    }

    return { insertPerson, insertUser, getPeople, getUsers, getLastId, getInfoUser }

}

module.exports = {
    databaseService
};