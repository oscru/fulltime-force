<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href="http://vite.dev/" target="blank"><img src="https://vitejs.dev/logo-with-shadow.png" width="200" alt="Vite Logo" /></a>
</p>

*This project has been created using [vite](https://vitejs.dev/) and [nestjs](https://nestjs.com/) using the monorepo architecture.

## Installation
For this project is necessary use [nodejs](https://nodejs.org/en/) ^16.x.x, and the papckage manager [Yarn](https://yarnpkg.com/).

Clone the repository and then install all the dependencies using:
```bash
yarn install
```
Create the enviroment variables for the project in the respective folder:

```bash
#backend
GITHUB_API_ENDPOINT="https://api.github.com/graphql"
GITHUB_API_ACCESS_TOKEN=#your github token
```
```bash
#frontend
VITE_API_URL="http://localhost:3000"
```
## Run the project
To run the project only has to run the following command:
```bash
yarn start
```
And then check your browser on  http://localhost:5173.

## Recomendations
If you want to install Husky, the pre-commit library, please, on your project folder run:
```
## Run the project
To run the project only has to run the following command:
```bash
yarn  husky install
```
And with this you can run the linters before pushing your commits.

-----
Visit my website [oscru.dev](https://oscru.netlify.app).
