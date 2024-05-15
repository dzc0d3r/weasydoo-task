# Weasydoo task Monorepo Project

This repository is a monorepo managed with TurboRepo, containing multiple projects for web, docs, and mobile apps for consuming [fakestore api](https://fakestoreapi.com/docs) and building a web app using [Next.js](https://nextjs.org) and a mobile app using [react native](https://reactnative.dev).

## Prerequisites

Before getting started, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) version >= 18
- [PNPM package manager](https://pnpm.io/) version 8.9.0
- [TurboRepo](https://turbo.build/repo) (`npm install -g turbo`)

## Installation

1. Clone this repository to your local machine:

```bash
pnpm install -g turbo #or pnpm install -g turbo
git clone https://github.com/dzc0d3r/weasydoo-task
cd weasydoo-task
```

2. Install dependencies for all projects:

```bash
pnpm install
```

## Visit the documentation website

```bash
pnpm docs:dev
```
visit [localhost:3001](http://localhost:3001)

---

## Running Projects

### To run all apps at once:

```bash
turbo dev
```

### Web App

To run the web app in development mode:

```bash
# using pnpm
pnpm web:dev
# or
pnpm --filter web dev
```

To build the web app for production start the app:

```bash
# using pnpm
pnpm web:build
# or
pnpm --filter web build
```

To run production build

```bash
export AUTH_URL=http://localhost:3000; pnpm web:start
```

```bash
export AUTH_URL=http://localhost:3000; pnpm --filter web start
```

### Docs

To run the documentation site in development mode:

```bash
pnpm docs:dev
```

To build the documentation site for production:

```bash
pnpm docs:build
```

### Mobile App

To run the mobile app in development mode:

```bash
pnpm mobile:dev
```

To build the mobile app for production:

```bash
pnpm mobile:build
```

### Mobile App (Android)

To run the mobile app on Android:

```bash
pnpm mobile:android
```

### Mobile App (iOS)

To run the mobile app on iOS:

```bash
pnpm mobile:ios
```

## Additional Commands

- **Linting**: Run linting for all projects:

```bash
pnpm lint
```

- **Type Checking**: Run type checking for all projects:

```bash
pnpm type-check
```

- **Formatting**: Format code using Prettier:

```bash
pnpm format
```

- **Cleaning**: Clean build artifacts:

```bash
pnpm clean
```

- **Unit Testing**: Run unit tests for the mobile app:

```bash
pnpm mobile:test
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
