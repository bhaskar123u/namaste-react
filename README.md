This codebase is for Namaste React course notes and code.

1. React element - Nothing but simple JS Object.

2. React.createElement('element', {k:'v'(html tag properties)}, ['childrens']); => Object and it becomes HTML which browser understands.

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