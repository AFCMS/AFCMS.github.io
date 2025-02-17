# AFCM's Site

AFCM's personal portfolio website.

## Used Libraries

- [**React**](https://reactjs.org)
- [**Vite**](https://vitejs.dev)
- [**Vite PWA**](https://vite-pwa-org.netlify.app)
- [**TailwindCSS**](https://tailwindcss.com)
- [**HeadlessUI**](https://headlessui.com)
- [**React Icons**](https://react-icons.github.io/react-icons)
- [**React Markdown**](https://github.com/remarkjs/react-markdown)
- [**Prettier**](https://prettier.io)
- [**PNPM**](https://pnpm.io)

## Usage

### Development Server

```shell
pnpm run start
```

### Production Build

```shell
pnpm run build
```

### Serve Production Build

```shell
pnpm run serve
```

### Rebuild PWA Assets

```shell
npm run generate-pwa-assets
```

### Deploy on GitHub Pages (Using GitHub CLI)

```shell
gh workflow run 47919864
```

### Autoformatter

Install the Prettier VSCode extention and add it as base formatter, enable format on save.

The `prettier` and `prettier-plugin-tailwindcss` npm packages needs to be installed. (They are in the dev dependencies)
