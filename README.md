# GitHub Actions Demo Repository

This repository is a small demo project for learning **GitHub Actions** with a simple front-end build pipeline. The site is generated from a `Pug` template and styled with CSS to produce a fun animated bear page.

## Overview

This project is useful for practicing how to:

- run workflows on `push` and `pull_request`
- build a static site during CI
- upload generated files as workflow artifacts
- work with a lightweight Node.js + Gulp project

## Getting started

### Prerequisites

Make sure you have the following installed:

- `Node.js`
- `npm`

### Install dependencies

```bash
npm install
```

### Build the project

```bash
npx gulp build
```

The generated site is written to the `dest/` directory.

### Preview locally

After the build finishes, open `dest/index.html` in your browser.

## Credits

The demo page is adapted from the CodePen bear project by Ryan Joseph:

- [Ryan Joseph on GitHub](https://github.com/ryan-joseph-dev)

## License

This project is distributed under the `ISC` license.
