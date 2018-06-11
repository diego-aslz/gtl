# Grouped Task Lists

This is a test project I built to show my skills as a software developer.
You can check the live version in https://enigmatic-river-73212.herokuapp.com/

Keep in mind that this app uses a local in-memory storage, so refreshing the
page will reset all data to its initial state.

## Installation

To get this project up and running on your local machine, clone this
repository, make sure you have [yarn](https://yarnpkg.com/lang/en/) installed
and run `yarn install` inside the project's folder.

## Running Tests

This project was developed using
[BDD](https://en.wikipedia.org/wiki/Behavior-driven_development). All
feature scenarios are inside the `features` folder.

To run the tests, simply call `yarn test` and it'll run the scenarios.

## Stylesheets

This project uses Sass to generate its CSS. Style files are inside
`src/styles` and images are in `src/images`.

If you are to change any style you'll need to recompile the final CSS,
which is stored in `src/styles/app.css`. To do that, just call
`yarn watch-css`, which will recompile it and monitor for further changes.
Once you're done changing styles, just hit Ctrl + C to stop watching.

## Starting the App

Just call `yarn start`.

## Database

To keep things simple, this app uses an in-memory storage (just a plain
Javascript `Array`) hidden behind a repository implementation, which can
be easily replaced by a real repository. Therefore, data is not persisted
across requests.
