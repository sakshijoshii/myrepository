import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsInt, IsNumber } from 'class-validator';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    firstName: string;

    @Column()
    @IsString()
    lastName: string;

    @Column()
    @IsString()
    email: string;

    @Column()
    @IsNumber()
    phone: string;

    @Column()
    @IsString()
    city: string;

    @Column()
    @IsString()
    country: string;
}