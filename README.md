# nested comments

# Features
- Able to Add, Delete, Update Comment by UserId.
- Update and Delete specific comment can only done by same person added the comment
- Can have nested comments

## server dependencies
-  @prisma/client": "^4.2.0", ->  ORM (Object relation management tools)
-  "dotenv": "^16.0.1", -> read env variables
-  "fastify": "^4.4.0" -> fast and overhead web framework for node.js

## client dependencies
- axios -> for handling api request

## install
- clone this repo, in command line navigate to the server directory
- in the server folder create `.env` file and add 3 env variables: DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/comments", PORT=3001, CLIENT_URL=http://localhost:3000 
- in the client/src folder create `.env` and and add 1 env variable: REACT_APP_SERVER_URL=http://localhost:3001
- to start the server in the server folder run `npm run devStart` the server is on [http://locahost:3001](http://locahost:3001)
- to start the client react app in the client folder run `npm start` the react app is on [http://locahost:3000](http://locahost:3000)

## preview 
![Preview](/client/src/assets/nested-comments.png)
