import { Field, ObjectType } from "@nestjs/graphql";
import { Transaction } from "./transaction.model";

@ObjectType()
export class Product {

    @Field(type => String)
    id: string

    @Field(type => [Transaction])
    transactions: Transaction[]
}