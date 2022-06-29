
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running migration

```bash
# Create a new migration
$ ts-node migrations/index.ts new -n CreateCollectionAccounts
# --OR
npm run migrate:new -- -n CreateCollectionAccounts

# Run all pending migration files
$ ts-node migrations/index.ts up
# --OR
npm run migrate:up

# Undo migrations
## Undo Last
$ ts-node migrations/index.ts down -l
# --OR
npm run migrate:down -- -l

## Undo All
$ ts-node migrations/index.ts down -a
# --OR
npm run migrate:down -- -a

```

### Running seeder
Details of declaration in [here](https://github.com/edwardanthony/nestjs-seeder)
```bash
# Run seeder
npm run seed

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
