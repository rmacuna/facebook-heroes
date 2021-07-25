<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="./src/docs/img/GithuRepo2.png" alt="Facebook clone" width="700" height="338"></a>
  <br>
      Facebook Heroes
  <br>
</h1>

<h4 align="center">A minimal functional clone of Facebook made for the heroes to share their experiences across the universe</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-run">How To Run</a> •
  <a href="#folder-structure">Folder structure</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
</p>

## Key Features

- Create the account with the test credentials.
- Quick login using Captain America credentials.
- Hardcode feed
- Create a new publication
- Facebook stories

---

## How to run

Run the following commands

```bash
yarn install
yarn dev
```

## Folder structure

| Name               | Description                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| **.vscode**        | Contains VS Code specific settings                                                                         |
| **.github**        | Contains GitHub settings and configurations, including the GitHub Actions workflows                        |
| **build**          | Contains the distributable (or output) from the react build                                                |
| **node_modules**   | Contains all the npm dependencies                                                                          |
| **src**            | Contains the source code that will be compiled to the build dir                                            |
| **src/components** | Components folder organized by features                                                                    |
| **src/constants**  | Constants that are shared between components                                                               |
| **src/docs**       | Static docs files that can be used in the Github documentation readme                                      |
| **src/hooks**      | Hooks used in two or more components                                                                       |
| **src/pages**      | Pages folder holds the routes and main components                                                          |
| **src/styles**     | Styles defines the css used for custom tailwindcss components                                              |
| **src/utils**      | Utils functions shared across the app                                                                      |
| package.json       | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped) |
| tailwind.config.js | File that contains tailwind configuration as well as custom tailwind variants                              |
| postcss.config.js  | File that contains postcss configuration                                                                   |
| next-env.d.ts      | Env declaration for NextJS apps                                                                            |
| tsconfig.json      | Config settings for compiling the app code written in TypeScript                                           |
| .eslintrc          | Config settings for ESLint code style checking                                                             |
| .eslintignore      | Config settings for paths to exclude from linting                                                          |
| .gitignore         | Config settings for paths to exclude from git                                                              |

## Credits

This software uses the following open source packages:

- [Framer Motion](https://www.framer.com/motion/)

## Related

Todo: Update related information
