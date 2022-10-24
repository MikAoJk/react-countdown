[![build,install and deploy main branch](https://github.com/MikAoJk/react-countdown/actions/workflows/build_install_deploy.yml/badge.svg?branch=main)](https://github.com/MikAoJk/react-countdown/actions/workflows/build_install_deploy.yml)

## Technologies used
* Yarn
* Typescript

#### Requirements
* Yarn
* Npm

Yarn can be installed through npm package manager, with this command:
``` bash
npm install --global yarn
```

## Available Scripts

In the project directory, you can run:

### install
``` bash
yarn install
```

Install all the dependencies listed within package.json in the local node_modules folder.

### start

``` bash
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000/react-countdown](http://localhost:3000/react-countdown) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### build

``` bash
yarn build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.


### Docker

#### Creating a docker image
Creating a docker image should be as simple as running this command:
``` bash
docker build -t react-countdown .
```

#### Running a docker image
Running the docker image you can use this command:
``` bash
docker run --rm -it -p 3000:3000 react-countdown
```
Application should be available at: [http://localhost:3000/react-countdown](http://localhost:3000/react-countdown)
to be viewed in the browser.

## Upgrade yarn

```yarn set version latest```

### Contact

This project is maintained by [CODEOWNERS](CODEOWNERS)

Questions please create an
[issue](https://github.com/MikAoJk/react-countdown/issues)
