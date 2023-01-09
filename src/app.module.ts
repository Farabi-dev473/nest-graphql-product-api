import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { apolloGraphQLConfig } from './config/apolloGraphql.config';
import { typeOrmConfig } from './config/typeOrm.config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env',
    }),
  apolloGraphQLConfig.getConfig(),
  ProductsModule,
  TypeOrmModule.forRoot(typeOrmConfig),
]})
export class AppModule {}
