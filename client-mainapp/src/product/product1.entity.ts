import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product1{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    img:string;
}