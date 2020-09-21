# Taskbox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Get up and running with Storybook

# Create your application:
`npx -p @angular/cli ng new my-app --style scss`

`cd my-app`

# Add Storybook:
`npx -p @storybook/cli sb init --type angular`

# Setup Jest with Angular
`npm install -D jest @types/jest jest-preset-angular@7.1.1 @testing-library/angular @testing-library/jest-dom @babel/preset-env @babel/preset-typescript`

## Check Jest Storybook and Angular are working properly

# Run the test runner (Jest) in a terminal:
`npm run jest`

# Start the component explorer on port 6006:
`npm run storybook`

# Run the frontend app proper on port 4200:
`npm run start`

