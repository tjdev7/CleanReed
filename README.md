![App logo](./public/img/CleanReed_header_icon.svg)

# CleanReed

An React dashboard app rendering API and JSON data from multiple subreddit boards.


![CleanReed 04-03-2024 update](./public/img/CleanReed--Splashpage.gif)

- [Why this app as created:](#why-this-app-as-created)
- [How to use:](#how-to-use)
- [Testing tools used for app:](#testing-tools-used-for-app)
- [Project resources:](#project-resources)
- [Future app goals:](#future-app-goals)
- [Completed tasks:](#completed-tasks)

Running automated tests

## Why this app as created: 

Proof of concept: I created this app with the intent of having a better, organized, and minimalist approach for browsing subreddit pages. The end goals for this projects are:

1) To automatically take posts from any subreddit you choose from and displaying everything neatly in rows,

2) Allowing users to also securely link their reddit account credentials with the app

3) For my small React app to be used as a tool/add-on/extension by regular reddit users

Disclamer: This project is not supported, endoresed or sponsered by either Reddit or Advance Publications. This project is only designed to be an Open Source tool for users in the site
## How to use:

1. Clone repo into desired directory ```git clone https://github.com/tjdev7/CleanReed.git``` or ```gh repo clone tjdev7/CleanReed```
2. Run ```npm install``` in your terminal to install all app node modules and dependencies
3. Run ```yarn start``` in your terminal to run app on http://localhost:3000/

## Testing tools used for the app:

-   React Testing library, Mocha, Jest and Cypress for testing components
-   TravisCI and CircleCI for CI/CD development
-   Prettier and ESlint for keeping all code formatted and organized

### Running automated tests:

```npm run linterclean``` to run Prettier tests
```npm run jesttests``` to run Jest tests
```npm run test``` to run local React testing library tests
```npm run litereport``` to run local Lighthouse tests
```npm run fullaudits``` to update local components and review if any packages are outdated
## Project resources:

- [Current roadmap for app](https://github.com/tjdev7/CleanReed/projects/1)
- [Wiki page](https://github.com/tjdev7/CleanReed/wiki)
- [Documentation for project contributors](https://github.com/tjdev7/CleanReed/tree/main/docs)

### Completed tasks:

- [x] User has the option to search for any subreddit currently available (Currently displays inside the console as in JSON format) 
- [x] Improve the UI design for app
- [x] Align all posts into small rows
- [x] Perfect the color scheme and page layout for app 
- [x] App extracts .json data from corresponding subreddits
- [x] Develop tests for each React component
- [x] Include CircleCI and Travis-CI inside project
- [x] Add a permalink url to each post made

### Future app goals:

- [ ] Make the app request data from a specific subreddit API and show it inside the page.
- [ ] App returns 403 and 404 error page if subreddit is either restricted or non-existant
- [ ] Add the option for endless page scrolldown for a chosen subreddit
- [ ] Add video/gif of app being used for README file
- [ ] Add Typescript to project
- [ ] Perfect the UI design UX experience for app. Make app responsive to mobile users
