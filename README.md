# usersAPI

This is my new API made with NodeJs and Express, and using Knex js as sql gestore, and MySql as database.

it is important to say that data such as identification and type of identification are based on those of Colombia.

## Content

### app.js 
start of the api

### route.js  
there you could find the routes of the API and the methods that it uses

### databaseService.js  
there is the connection with MySql and the methods to get and post information
At the time, there is not methods like put and delete

### script.sql    
there you will find the scripts to generate the database in MySql.


## Routes

### GET 'http://localhost:3001/api/people'
returns information about people registered

### GET 'http://localhost:3001/api/users'
returns data about users registered

### GET 'http://localhost:3001/api/lastId'
returns the id of the last registered person

### GET 'http://localhost:3001/api/infoUsers'
returns the join of the two tables

### POST 'http://localhost:3001/api/people'
makes a post of the information in the table people

![image](https://user-images.githubusercontent.com/81336145/160258699-b0512fa1-8a71-4255-a6a6-a63611484b87.png)

### POST 'http://localhost:3001/api/users'
makes a post of the information in the table users

![image](https://user-images.githubusercontent.com/81336145/160258719-526bb020-2d20-46ef-a2c9-0578d3cf06c8.png)
