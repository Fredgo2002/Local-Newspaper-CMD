# LocalNewspaperCms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Architecture decision
This project is a SPA (Single Page Application) using a component-based architecture with separation of concerns. Implemented using Angular material for UI components and Bootstrap for styling. 

## Data flow
Data is managed using in-memory storage and services. CRUD basic operations are implemented but everything is restarted on refresh.

## Components
- SidebarComponent: Navigation menu
- ArticlesHomeComponent: List of articles
- ArticleSidePaneComponent: Add, edit, view articles

## Features
- CRUD operations for articles
- Filter articles by category
- Pagination
- Side pane for article management

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

