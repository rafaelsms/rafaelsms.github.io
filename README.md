# `rafaelsms.com`

Personal website with my CV and a brief description of my interests.

## Dependencies, building, running

Requires [Node.js](https://nodejs.org/en). Feel free to use `yarn` or `npm` as package manager.

To install using `npm`:
```
$ npm install
```

[Webpack](https://webpack.js.org) is used to serve for development and build for release. Some plugins are used to further minimize the size of the package, filtering only necessary CSS classes used in the index page. [Bootstrap](https://getbootstrap.com)'s Javascript components are not needed for this simple page, so they're not included in `/src/app.js`.

To serve for development:
```
$ npm run serve
```
The development server has `/src/app.js` as an entrypoint, serving files in `/static/` as well. Also, `/index.html` is an [soft link](https://en.wikipedia.org/wiki/Symbolic_link) to `/static/index.html`.

To build for release:
```
$ npm run build
```
