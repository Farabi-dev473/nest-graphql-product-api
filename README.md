# README

[![Nest Logo](https://nestjs.com/img/logo-small.svg)](http://nestjs.com/)

A progressive [Node.js](http://nodejs.org) framework for building efficient and scalable server-side applications.

[![NPM Version](https://img.shields.io/npm/v/@nestjs/core.svg)](https://www.npmjs.com/\~nestjscore) [![Package License](https://img.shields.io/npm/l/@nestjs/core.svg)](https://www.npmjs.com/\~nestjscore) [![NPM Downloads](https://img.shields.io/npm/dm/@nestjs/common.svg)](https://www.npmjs.com/\~nestjscore) [![CircleCI](https://img.shields.io/circleci/build/github/nestjs/nest/master)](https://circleci.com/gh/nestjs/nest) [![Coverage](https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9)](https://coveralls.io/github/nestjs/nest?branch=master) [![Discord](https://img.shields.io/badge/discord-online-brightgreen.svg)](https://discord.gg/G7Qnnhy) [![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer) [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor) [![](https://img.shields.io/badge/Donate-PayPal-ff3f59.svg)](https://paypal.me/kamilmysliwiec) [![Support us](https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg)](https://opencollective.com/nest#sponsor) [![](https://img.shields.io/twitter/follow/nestframework.svg?style=social\&label=Follow)](https://twitter.com/nestframework)

## Products API

An Graphql based api where user can read, create, delete product & listen for realtime notification about newly created & deleted product

something changed

### GraphQL Schema

**Types**

```
type Delete {
  id: String!
  deleted: Boolean!
}

type Transaction {
  id: String!
  quantity: Int!
  time: String!
  status: String!
}

type Product {
  id: String!
  transactions: [Transaction!]!
}
```

**Queries**

```
type Query {
  products: [Product!]!
  product(id: String!): Product!
}
```

**Mutations**

```
type Mutation {
  createProduct(quantity: Int!): Product!
  deleteProduct(id: String!): Delete!
}
```

**Subscriptions**

```
type Subscription {
  createdProduct: Product!
  deletedProduct: Delete!
}
```

### API Reference

**Get All Products**

```
query products {
  products {
    id
    transactions {
      id
      quantity
      time
    }
  }
}
```

**Get a specific product**

```
query product {
  product(id: "8e532ef8-88a2-44eb-8683-632badc2d106") {
    id,
    transactions{
      id,
      quantity,
      time
    }
  }
}
```

**Create a product**

```
mutation createProduct{
  createProduct(quantity: 14) {
    id,
    transactions{
      id,
      quantity,
      time
    }
  }
}
```

**Delete a specific product**

```
mutation deleteProduct{
  deleteProduct(id: "8e532ef8-88a2-44eb-8683-632badc2d106") {
    id,
    deleted
  }
}
```

**Real time notification - If any product is created**

```
subscription createdProduct{
  createdProduct{
    id,
    transactions{
      id,
      quantity,
      time
    }
  }
}
```

**Real time notification - If any product is deleted**

```
subscription deletedProduct {
  deletedProduct{
    id,
    deleted
  }
}
```

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

### Stay in touch

* Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
* Website - [https://nestjs.com](https://nestjs.com/)
* Twitter - [@nestframework](https://twitter.com/nestframework)

### License

Nest is [MIT licensed](LICENSE/).
