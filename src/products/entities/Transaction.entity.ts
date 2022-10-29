import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column()
    status: string

    @Column()
    quantity: number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public time: Date;

    @ManyToOne(() => Product, (product) => product.id, {
        onDelete: 'CASCADE'
    })
    productId: string
}