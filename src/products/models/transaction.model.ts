import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Transaction {
    @Field(type => String)
    id: string

    @Field(type => Int)
    quantity: number

    @Field(type => String)
    time: string

    @Field(type => String)
    status?: string
}