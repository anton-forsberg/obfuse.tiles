## TODO:
* Saving/loading
* ~Responsive design~
* Code splitting for plugin reducers/sagas
* ~Handle touch screens~
* Printing
* Something asynchronous
* ~Performance~
* User defined palettes
* More than 8 colors per palette
* Filters

## Lessons learned:
* When making components that list objects, it's better to have the individual items deepload (read from redux) their data than reading it from the list component. This is because otherwise every list item will re-render every time an individual items data changes.
* It's good to read from the redux-state in redux actions (using saga/thunk) whenever possible. This is because otherwise you are creating dependencies between your components and the redux state unnecessarily, which may cause components to re-render when they don't need to.
* When exposing functions in custom hooks, always use the `useCallback` hook. Otherwise the hook will cause the component to re-render unnecessarily.
* Best tools for performance improvements (reduce unnecessary renders):
    * `equalityFn` in `useSelector`
        * If possibly just don't return objects/arrays from redux selector functions. That will avoid this problem completely
    * Read data concerning individual list-items from the redux store in the item component itself rather than in the list component
    * `useCallback` in functions returned from custom hooks
    * Don't burden components/hooks with data from redux if it can be read from the store directly when an action is dispatched

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
