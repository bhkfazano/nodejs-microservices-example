import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar', length: 250, unique: true })
    public email: string;

    @Column({ type: 'varchar', length: 250 })
    public password: string;
}