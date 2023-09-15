# AFCM's Site

[![GitHub Super-Linter](https://github.com/AFCMS/AFCMS.github.io/workflows/Linting/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Used Libraries

- [**React**](https://reactjs.org)
- [**Vite**](https://vitejs.dev)
- [**TailwindCSS**](https://tailwindcss.com)
- [**HeadlessUI**](https://headlessui.com)
- [**React Icons**](https://react-icons.github.io/react-icons)
- [**React Markdown**](https://github.com/remarkjs/react-markdown)
- [**Prettier**](https://prettier.io)

## Usage

### Development Server

```shell
npm run start
```

### Production Build

```shell
npm run build
```

### Serve Production Build

```shell
npm run serve
```

### Deploy on GitHub Pages (Using GitHub CLI)

```shell
gh workflow run 47919864
```

### Autoformatter

Install the Prettier VSCode extention and add it as base formatter, enable format on save.

The `prettier` and `prettier-plugin-tailwindcss` npm packages needs to be installed. (They are in the dev dependencies)
