# RICK & MORTY APP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🚀 About 🚀 

A React application that allows users to browse Rick and Morty characters, navigate through pages, view character details, and filter by status (Alive, Dead, or Unknown).

## 🌟 Key Features

- View a list of Rick and Morty characters
- Pagination to navigate between pages
- Filtering characters by status
- Insight into character details
- Smooth user experience with a responsive design
- Testing main components with Jest and React Testing Library to ensure stability and reliability

## Additional information

I have changed imports from react-router-dom to react-router because tests were not recognizing react-router-dom properly. This solution was based on information from:
[Stack Overflow][https://stackoverflow.com/questions/79256904/cannot-detect-installed-react-router-dom-package-when-running-unit-tests]
[React Router DOM npm ][https://www.npmjs.com/package/react-router-dom]

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
