This codebase is for Namaste React course for notes and code (https://bhaskar123u.github.io/namaste-react/)

1. React element - Nothing but simple JS Object.

2. React.createElement('element', {k:'v'(html tag properties)}, ['childrens']); => Object and it becomes HTML which browser understands when we render it.

3. React.render replaces everything in the tag it is added, but html tree is made line by line, meaning all the element will be parsed line by line and when it sees .render( ), then it starts working -> order of files matter a lot.

4. React is a library, it can work inside a simple tag also. We don't need to create a full fledged app, react can be injected in a small portion of the app also.

5. If we want to create fast production ready app, react can't do it alone. We have other apps which helps react to do that.

6. NPM - It is not Node Package Manager 😂. In fact it is everything but not Node Package Manager. It is standard repository for a lot of packages. It uses package.json for managing versions of all packages/dependencies which are to be used in our app.

7. Parcel/Webpack/Vite - Bundlers. Bundles and packages the app so that it can be shiped to production. The 'create-react-app' command used webpack and babel behind the scenes to build things up. We are going to use parcel. This is installed as a dev dependency using 'npm install -D parcel'.

8. "^2.15.4" let's say this is the parcel version installed, now tomorrow 2.15.5 is realease, ^ -> installs the minor version automatically. ~ updates to next major version whichever is released.

9. package.json - keeps track of version installed for npm but package-lock.json - holds exact version that was used initially, it also holds all the version for all transitive dependency of all the packages which will be used. It keeps a hash to track version of local vs prod packages. Each dependency/project has it's own package.json which is used to download all transitive dependencies.

10. node_modules - fetch all actual code that will be used as a dependency. It is big in size don't put in github. All of node_modules can be created using package.json and package-lock.json. It's a collection of all dependencies.

11. npx parcel index.html - like npm, we have npx. Installing a package - npm ...
Executing a package - npx ...

12. using CDN for react is a costly operation - extra network call, instead install react locally as a package

13. We might get error as: Browser scripts cannot have imports and exports and points to this code <script src="./app.js"></script>. What this is telling that rn, the browser treats './app.js' as a simple js file. We have to tell it browser that is it a module.

14. Parcel - Dev(npx parcel index.html)/Prod(npx parcel build inde.html) Builds(in ./dist folder), Local Server, Hot Module Replacement(HMR - code changes automatically in server), it uses a file watching algorithms written in C++. It is using ./parcel-cache to load pages instantly giving faster builds. Image optimisation, Minification of files, Bundling, Compression, Code Splitting, Differential Bundling(support of older browsers), host app on HTTP && HTTPS, Tree Shaking Algorithms(remove unused code), Consistent Hashing.

15. We can write scripts in package.json to configure start command, from npx parcel index.html -> npm start

16. JSX - Javascript syntax to create React elements easily. It's hard to use React.createElement() for nested structures. It is not part of React, it is just a syntactical sugar.

17. Why react was built? - Markup in HTML, logic in JS, style in CSS. React tries to merge these things. All in same file.

18. HTML heading - `<h1 id='heading'>H1 in HTML</h1>`, React heading - React.createElement("h1",{id:'heading'},'H1 in React'), JSX heading - const heading = `<h1 id='heading'>H1 in JSX</h1>`

19. JSX != HTML inside javascript, it is HTML like syntax

20. Brower's JS Engine doesn't understand JSX, it understands only ECMA script. Whenever we write JSX, Parcel(Babel) converts it into valid JS. The code is transpiled before the code reaches JS Engine. How the conversion happens : check here - https://babeljs.io/ e.g., const heading = `<h1>sample h1 tag</h1>` -> const heading = `/*#__PURE__*/React.createElement("h1", null, "sample h1 tag")`

21. Babel is a transpiler, some browsers doesn't understand newer code, babel converts it into older format. Babel is a code converter and not only JSX, it handles a lot of things.

22. Use camelcase when giving properties in JSX tags e.g., in html `<h1 class='heading'>H1 tag</h1>` but in JSX we write
const heading = `<h1 className='heading'>H1 tag</h1>`.

23. Mutliple line JSX - wrap in ( ) for babel to understand the start and end point.
const heading = (`<h1 className='heading'>H1 tag</h1>`) not needed in single line but is needed in multiple lines JSX

24. React Component - Class Based, Function Based. Start with a CAPITAL LETTER. Functional Component(FC) is simply a JS fn which returns a JSX/React Element e.g., const FunctionalComponent = () => { return `<h1>H1 tag</h1>`; } OR const FunctionalComponent = function(){ return (`<h1>H1 tag</h1>`);};. We can also avoid 'return' keyword in arrow function syntax.

25. When we call a FC from another FC, it is called component composition.

26. In JSX whatever we write in {} is executed. We can execute JS code inside in it. JSX sanitise the data before using e.g., `<h1>{console.log(1+2);}</h1>` and prevents XSS attacks. We can add a react element in {} also.

27. If we want to give style in JSX, we have to give it like a JS Object for e.g., const styleCard = { color: '#f0f0f0' } and we can use it like return (`<div className='header' style={styleCard}></div>`). The same thing can be also done in this way `<div className='header' style={{ color: '#f0f0f0' }}></div>`.

28. In react we have props - something which we can pass to a component. Used to dynamically pass value to a component. Passing props to a component is same as passing an argument to a function. All props are passed as an object to the component.

29. Config Driven UI - Different UI for different user. It is data-driven.

30. When we loop over data and pass it in any component, make sure to have a key. Avoid index as keys if possible. Keys are very important as it tracks changes in DOM tree. If we don't have unique id for each data, we can use indexes as id.
Not using keys <<< index as keys <<< unique key.

31. We have 2 types of export/imports. 1. Default 2. Named.
1 -> export default Header; then import Header from "path";
2-> export const data; then import {data} from "path"; (when we have to multiple things from same file)

32. Whenever some data changes, let's say we have a list of objects which is powering some UI, now whenever that list changes, it won't update the UI, UNTIL THAT VARIABLE IS TRACKED BY REACT. Dom manipulation is powered by VIRTUAL DOM and diff algorithms. To do this react gives a way to declare a variable which is TRACKED BY REACT. We have to use a method called useState. It is a react hook. Hooks is nothing but a normal JS utility function. Most common ones are - useState, useEffect.

33. How do we create such variables - using useState. useState returns 2 things, react variable and a method to set that variable.
JS variable - const list = ['default_value'];
React state variable - const [list, setList] = useState(['default_value']); now to update the list we will call setList( ) function. Whenever the state variable will change, react RE-RENDERS the UI component where the state variable lives. When we use setList('some_value'), this doesn't change the same variable but it creates a new variable internally, hence the const nature of the variable is not voilated.

34. React uses reconciliation algorithm(React 16). It is also known as REACT FIBER. On UI let's say we have a DOM(tree), and the UI changes to filter some data which is supposed to update the UI. React creates a VIRTUAL DOM(internally it is a nested object, js representation of all html elements). It is a copy of actual DOM(tree). Now all the changes that happens, is tracked using old VIRTUAL DOM and new VIRTUAL DOM. As soon as something changes there is a delta between VIRTUAL DOMs. The difference is calculated and UI component is updated accordingly. Read here - https://github.com/acdlite/react-fiber-architecture

35. We should note that useState doesn't immediately changes data, let's say we want to build some filters using set method of useState, it is not always in sync. We can use useEffect hooks for that.

36. useEffect hook takes 2 arguments(callback fn, dependency array) - useEffect(()=> { console.log('callback fn is called');}, []). When the body component is loaded and the html is rendered, just after that the useEffect is called.
Body component loaded - UI is rendered - useEffect is called.

37. When we call a component like - `<Body />`, internally it will start executing all code, useState variables, then it will start rendering the JSX, meanwhile if it had encountered any useEffect code, it pushes that callback in a queue which is executed later.

38. CORS - Cross Origin Request. Our browsers don't allow to call external api from local host as they are 2 different source. This happens when the api server has 'Access-Control-Allow-Origin' in it's header. There is way we can get rid of that while development mode - use allow cors extension.

39. Shimmer - If we have a api call and based on tha data received, we are populating some UI, we should show shimmer for the time being the data is loaded. It will make UI/UX experience smooth as user sees a skeleton of page and then the actual page, making it a smooth experience.

40. Whenever state variables update, react re-renders the component. useEffect(()=> { console.log('callback fn is called');}, []), this will be printed only once after the initial render. But useEffect(()=> { console.log('callback fn is called');}, [some_variable]), this will be printed once after the initial render and then everytime some_variable changes.