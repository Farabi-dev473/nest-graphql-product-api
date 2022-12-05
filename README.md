<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Products API
##SIMEPLE CHANGE
An Graphql based api where user can read, create, delete product & listen for realtime notification about newly created & deleted product

## GraphQL Schema

#### Types
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

#### Queries
```
type Query {
  products: [Product!]!
  product(id: String!): Product!
}
```

#### Mutations
```
type Mutation {
  createProduct(quantity: Int!): Product!
  deleteProduct(id: String!): Delete!
}
```

#### Subscriptions
```
type Subscription {
  createdProduct: Product!
  deletedProduct: Delete!
}
```

## API Reference

#### Get All Products
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
#### Get a specific product
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

#### Create a product 
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

#### Delete a specific product
```
mutation deleteProduct{
  deleteProduct(id: "8e532ef8-88a2-44eb-8683-632badc2d106") {
    id,
    deleted
  }
}
```

#### Real time notification - If any product is created
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
#### Real time notification - If any product is deleted
```
subscription deletedProduct {
  deletedProduct{
    id,
    deleted
  }
}
```
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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
