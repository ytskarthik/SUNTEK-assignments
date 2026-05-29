1. Generate package.json

2. Create server.js

3. install dependencies
    ```bash
    npm install express
    ```
4. create http server

5. assign port

# sequilize --> must learn concepts of ORM

## Connect with MongoDB database

    REST API  ----> mongodb native driver  ----> MongoDB server
    REST API  ----> mongodb ODM tool(Mongoose)  ----> MongoDB server
* ODM --> Object Document Mapper

### a. Install mongoose and connect to mongodb server

    npm install mongoose
### b.Create Schema of Resource
### c. Create Model of that Schema
### d. Use that Model to perform CRUD operations