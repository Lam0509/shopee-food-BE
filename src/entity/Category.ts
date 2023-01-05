import {
    Column,
    Entity, ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import {Product} from "./Product";

@Entity()

export class Category {

    @PrimaryGeneratedColumn()
    public readonly id: number;

    @Column({ type: "varchar", length: 45 })
    public name: string;

    @ManyToMany(type => Product, product => product.categories)
    products: Product[]

}