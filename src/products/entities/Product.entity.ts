import { Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./Transaction.entity";

@Entity()
export class Product {
   @PrimaryGeneratedColumn('uuid')
   @OneToMany(() => Transaction, (transaction) => transaction.productId, {
      onDelete: 'CASCADE'
   })
   @JoinColumn()
   id: string
}