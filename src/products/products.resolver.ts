// import { Query } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import Events from './enums/Events';
import { Delete } from './models/delete.model';
import { Product } from './models/product.model';
import { ProductsService } from './products.service';


@Resolver(of => Product)
export class ProductsResolver {
   private pubsub: PubSub
    constructor(private readonly productService: ProductsService) {
      this.pubsub = new PubSub()
    }

    @Query(returns => [Product])
   async products(){
     return this.productService.getAllProducts()
    }

    @Query(returns => Product)
    product(@Args({name: 'id', type: () => String})id: string) {
      return this.productService.getProduct(id)
    }

    @Mutation(returns => Product)
    createProduct(@Args({name: 'quantity', type: () => Int}) quantity: number) {
         const newProduct = this.productService.createSingleProduct(quantity)
         const payload = {}
         payload[Events.PRODUCT_CREATED] = newProduct
         this.pubsub.publish(Events.PRODUCT_CREATED, payload)
         return newProduct
    }

    @Mutation(returns => Delete) 
    deleteProduct(@Args({name: 'id', type: () => String})id: string) {
       const deleteResponse =  this.productService.deleteProductById(id)
       const payload = {}
       payload[Events.PRODUCT_DELETED] = deleteResponse
       this.pubsub.publish(Events.PRODUCT_DELETED, payload)
       return deleteResponse
    }

    @Subscription(returns => Product) 
    createdProduct() {
     return this.pubsub.asyncIterator(Events.PRODUCT_CREATED)
    }

    @Subscription(returns => Delete)
    deletedProduct() {
      return this.pubsub.asyncIterator(Events.PRODUCT_DELETED)
    }

}
