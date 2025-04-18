# Note UI
Note UI is a simple note-taking application built with React, TypeScript, and Tailwind CSS. It allows users to create, edit, and delete notes with ease.

## Dev details
### How it was created
```bash
npm create vite@latest
npm install
```

### How to run
```bash
npm run dev
```

### How to Docker build
```bash
# Build the image
docker build -t notes-ui .

# Run the UI container
docker run -p 8081:80 -e REACT_APP_API_URL=http://localhost:8080 notes-ui

# Run the API container
docker run -p 8080:8080 ghcr.io/marcelloraffaele/notes-api:latest
```

### Useful links
- [Tailwind CSS Installation](https://tailwindcss.com/docs/installation/using-vite)
- [Tailwind Flex Feature Showcase](https://tailwindflex.com/@alok/feature-showcase)


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

