import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Delete {

    @Field(type => String) 
    id: string

    @Field(type => Boolean)
    deleted: boolean
}