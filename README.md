# Lex Todos

Simple Todos application for practicing purpose :)

## Available right now

Deployed at [Github Pages](https://lexeor.github.io/lex-todos/)

## Features

- Initial 5 todos fetched from (JSON Placeholder API)[https://jsonplaceholder.typicode.com].
- Todos state is syncronized with localStorage and managed by Redux Toolkit.
- Clear all finished tasks in one click (or tap).
- Mobile friendly.

## Installation

Install the dependencies and start the project:

```sh
npm i
npm start
```

## Technologies

- React 18
- Typescript
- Redux Toolkit as a state manager.
- React Toastify for showing errors.
- Axios for HTTP requests to the API.

## Ways to improve

- Sliding menu with delete/edit buttons for every Todo Item for better mobile experience.
- Better item remove behaviour (grayout until next refresh to be able to restore accidently deleted item).
- Mobile design needs more polishing.

## Roadmap

- [x] Add localStorage sync
- [x] Add favicon for most supported devices
- [x] Deploy at Github Pages
- [ ] Implement todos editing
- [ ] Add Docker support
- [ ] Deploy on own cloud server

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/). Feel free to use and modify the code as per your needs.
