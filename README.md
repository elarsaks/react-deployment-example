# React Deployment Example

[![Build Status](https://img.shields.io/github/actions/workflow/status/elar-saks/react-deployment-example/deploy-react-app.yml?branch=deploy-react-app)](https://github.com/elar-saks/react-deployment-example/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)

<img src="https://media.licdn.com/dms/image/v2/D4D12AQHObzwwV-SWHg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1690304767597?e=1756339200&v=beta&t=sIqyM2xH4NaGG4U3YH8SfOQZshzxp7ecifcJE_gSiSo" alt="React app deployment workflow example" style="display:block;width:100%;max-width:100vw;margin:0;padding:0;border:0;"> <br>

> **Live example repository for the LinkedIn article:**<br>
> [Automate React App Deployment with GitHub Actions](https://www.linkedin.com/pulse/automate-react-app-deployment-github-actions-elar-saks-/) by Elar Saks.

---

## Table of Contents
- [What does this repo demonstrate?](#what-does-this-repo-demonstrate)
- [How does it work?](#how-does-it-work)
- [Features](#features)
- [Getting Started](#getting-started)
- [GitHub Actions Workflow](#github-actions-workflow)
- [Related Resources](#related-resources)

## What does this repo demonstrate?

- **Automated deployment** of a React app to GitHub Pages using GitHub Actions.
- Example workflow file: `.github/workflows/deploy-react-app.yml`.
- Minimal React app in `src/`.

## How does it work?

- On every push to the `deploy-react-app` branch, the workflow:
  1. Checks out the code
  2. Sets up Node.js
  3. Installs dependencies
  4. Builds the React app
  5. Deploys the `build/` folder to GitHub Pages using `peaceiris/actions-gh-pages`

## Features
- Zero-config React deployment to GitHub Pages
- Modern GitHub Actions workflow
- Easy to fork and adapt for your own projects
- LinkedIn article for step-by-step guidance

## Getting Started

1. **Fork or clone** this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build locally (optional):
   ```bash
   npm run build
   ```
4. Push changes to the `deploy-react-app` branch to trigger deployment.

## GitHub Actions Workflow

See the workflow file at `.github/workflows/deploy-react-app.yml` for details.

## Related Resources
- [LinkedIn Article: Automate React App Deployment with GitHub Actions](https://www.linkedin.com/pulse/automate-react-app-deployment-github-actions-elar-saks-/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

For a step-by-step guide and explanation, read the full article on LinkedIn:
[Automate React App Deployment with GitHub Actions](https://www.linkedin.com/pulse/automate-react-app-deployment-github-actions-elar-saks-/)
