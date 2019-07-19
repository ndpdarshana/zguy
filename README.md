Hi Andrew,

Here I attached the stage 1 code for the assignment. Please follow the following instructions to setup project locally.

The project requirement:
NodeJS
MongoDB

To setup server (/api) project:
0. `cd api/`
1. `npm install`
2. `node Server`

NOTE: This assume that there is mongodb server installed and up an running.
Also there is a mongodb schema call `zguy` is available.

`mongod` command will run the mongodb Server
`mongo` command will give the access to mongodb client
once in mongodb client run `use zguy` to create the schema

To setup client (/client) project
0. `cd clien/`
1. `npm install`
2. `npm start`

This will open up the screen on your default browser with simple ui which can be
enter a text and submit it.
below that, existing data will be show. However since this use asynchronous React components, the page must be reload to display the result for the moment.

PS: As I got short time to do this including learning React basics within one day, I couldn't finish the stage 2 and 3 as I have to learn both basics of Typescript and docker.

Please let me know if there anything I can assist with.

Thank you.
