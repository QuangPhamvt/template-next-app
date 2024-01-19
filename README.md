
<!-- markdownlint-disable MD032 MD033-->
# 🔥 **CustomAFK GitHub Template next app**

<!-- <p align="center"> -->
<!--   <br> -->
<!--   <a href="https://github.com/QuangPhamvt/ie307-front-end-next/issues"> -->
<!--     <img src="https://img.shields.io/github/issues-closed/QuangPhamvt/ie307-front-end-next?color=0088ff&style=for-the-badge&logo=github" alt="@QuangPhamvt/ie307-front-end's issues"/> -->
<!--   </a> -->
<!--   <a href="https://github.com/QuangPhamvt/ie307-front-end-next/pulls"> -->
<!--     <img src="https://img.shields.io/github/issues-pr-closed/QuangPhamvt/ie307-front-end-next?color=0088ff&style=for-the-badge&logo=github" alt="@QuangPhamvt/project-template's pull requests"/> -->
<!--   </a> -->
<!--   <a href="https://github.com/QuangPhamvt/ie307-front-end-next/actions/workflows/deploy.yml"> -->
<!--     <img src="https://github.com/QuangPhamvt/ie307-front-end-next/actions/workflows/deploy.yml/badge.svg" alt="@QuangPhamvt/ie307-front-end-next's tests"> -->
<!--   </a> -->
<!-- </p> -->

---

## 🤔 **What is this project?**

* This is Template for project next js.

---

## ⚡ **Installation**

1. Prerequires
- Bun version > 1.0.x 
- Or `NodeJS >=18.x`
2. Clone repository
   ```bash
   git clone git@github.com:QuangPhamvt/template-next-app.git
   ```
3. Install packages
   ```bash
   bun install  # or you can use yarn add, npm install
   ```
4. Install prepare config
   ```bash
   bun prepare # if you use yarn or npm please consider 
   ```
6. Usage
   ```bash
   bun start # or yarn run start, npm run start
   ```


---

## 📚 **What does it include?**


---

### 🌲 **Project tree**

```
```

---

## 📝 **Additional notes**

## 📖 **Information**
### Package
```
  "dependencies": {
    "@apollo/client": "^3.8.10",
    "clsx": "^2.1.0",
    "graphql": "^16.8.1",
    "next": "14.0.4",
    "react": "^18",
    "react-dom": "^18",
    "recoil": "^0.7.7",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@commitlint/cli": "^18.4.4",
    "@commitlint/config-conventional": "^18.4.4",
    "@storybook/addon-essentials": "^7.6.10",
    "@storybook/addon-interactions": "^7.6.10",
    "@storybook/addon-links": "^7.6.10",
    "@storybook/addon-onboarding": "^1.0.10",
    "@storybook/blocks": "^7.6.10",
    "@storybook/nextjs": "^7.6.10",
    "@storybook/react": "^7.6.10",
    "@storybook/test": "^7.6.10",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.4",
    "eslint-plugin-storybook": "^0.6.15",
    "husky": "^8.0.3",
    "postcss": "^8",
    "prettier": "^3.2.4",
    "prettier-plugin-tailwindcss": "^0.5.11",
    "storybook": "^7.6.10",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  },
```

## ❔ **How to push**

- Role commit
  `{type}: {subject}`
  - type: build | chore | ci | docs | feat | fix | perf | refactor | revert | style | test
  - subject: 'Write a short, imperative tense description of the change'
- Automatic: check lint and format pre-commit

- Example:

```bash
git commit -m "{type}: {subject}"
```

Description
|**Types**| **Description** |
|:---| :--- |
|feat| A new feature|
|fix| A bug fix|
|docs| Documentation only changes|
|style| Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
|refactor| A code change that neither fixes a bug nor adds a feature |
|perf| A code change that improves performance |
|test| Adding missing tests or correcting existing tests |
|build| Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm) |
|ci| 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
|chore| Other changes that don't modify src or test files |
|revert| Reverts a previous commit |


