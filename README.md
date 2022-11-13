# Hi everyone ! 
 
## Stocks Website

### Setup (client)

Clone the repository and install the dependencies

`yarn install`

Start the frontend application (stock-app) locally
`yarn start`

#### Available commands -
`yarn start`: Start the app locally in your development environment, by default it will be in http://localhost:3000.

`yarn test`: Run tests using watch mode.

`yarn lint`: Run linter.

### Setup (server)

open the .sln file on visual studio. 

press the `ctrl + alt + B` to build the project. 
then run it locally to provide the client the data he need. 

## remarks - 
1. be aware of the "stocks" (in stockApi) folder that contains all the data files the server read from. 
maybe you should change the url in the `StreamReader` so the server will know where to find it. 