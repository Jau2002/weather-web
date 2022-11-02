<h1 align='center'>WEATHER WEB</h1>

<p>
  <img align='right' height='50' src='./src/assets/public/favicon.png' />
</p>

Web page that shares local weather forecasts, meteorology, climatic and subsoil conditions at a schematic level, to many cities on the globe.

[![Deployment pipeline](https://github.com/Jau2002/weather-web/actions/workflows/pipeline.yaml/badge.svg?branch=main&event=push)](https://github.com/Jau2002/weather-web/actions/workflows/pipeline.yaml)
[![pages-build-deployment](https://github.com/Jau2002/weather-web/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Jau2002/weather-web/actions/workflows/pages/pages-build-deployment)

---

## Table of Contents

1. [Setup](#setup-installation)
2. [Manual](#manual)
3. [Contributing](#contributing)
4. [technology's](#technologys-ecosystem)

---

## Setup installation

### Prerequisites

It is recommended to install Yarn through the `npm` package manager, which comes bundled with `Node`.js when you install it on your system. Before starting you must install dependencies of the repository.

```BASH
  npm install --global yarn
  yarn install
```

### Quick start

You can call it from within a package.json a **script** to initialize the application.

```BASH
  yarn run start
```

---

## Manual

![First glance](/src/assets/docs/sugestions-page.png)

Location search tips page in case you made a mistake while searching.

![Search bar](/src/assets/docs/search-bar.png)

All you have to do is search for the city of preference.

![cities](/src/assets/docs/cities.png)

> Visit site [Weather web](https://jau2002.github.io/weather-web)

---

## Contributing

The main goal of this project was to learn to use react in its new versions, in addition to the implementation of solid principles and componentization of react custom hooks. At the same time integration of good practices and load performances.

Integration builders, linter and testing integration y ci/cd. handling of git and conventional commits. Last but not least, use of Less preprocessor and OOCSS architecture with BEM methodology.

---

## technology's ecosystem

| name                  | dependencies                                                               | Description                                                                                                                                                                                                                                                                                                                        |
| --------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| React                 | <img height='55' src='./src/assets/docs/react-icon.png' />                 | React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.                                                                                                                                 |
| Webpack               | <img height='60' src='./src/assets/docs/webpack-icon.png' />               | At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from. |
| Less                  | <img height='70' src='./src/assets/docs/less-icon.png'/>                   | Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets and run on the client side or server side. Designed by Alexis Sellier, Less is influenced by Sass and has influenced the newer "SCSS" syntax of Sass, which adapted its CSS-like block formatting syntax.                     |
| Jest                  | <img height='50' src='./src/assets/docs/jest-icon.webp' />                 | Jest is a JavaScript testing framework built on top of Jasmine and maintained by Meta. It was designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications.                                                                                                                          |
| Babel                 | <img height='70' src='./src/assets/docs/babel-icon.png' />                 | Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines.                                                                                                                               |
| React Testing Library | <img height='55' src='./src/assets/docs/react-testing-library-icon.png' /> | This library encourages your applications to be more accessible and allows you to get your tests closer to using your components the way a user will, which allows your tests to give you more confidence that your application will work when a real user uses it.                                                                |
