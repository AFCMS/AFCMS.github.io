# AFCM's Site

[![GitHub Super-Linter](https://github.com/AFCMS/AFCMS.github.io/workflows/Linting/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Used Libraries

- React
- React-Icons
- React-Markdown
- ReactCountryFlag
- Postcss
- TailwindCSS
- Prettier

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

## TODO

- [ ] Rewrite main text
- [ ] More informations in the Informations tab
- [ ] Make sure site works on most devices
- [ ] Add more links?
- [ ] Add footer?
- [x] Add `Dependabot`
- [ ] Add `Prettier` in the GitHub Actions workflow?
