import { Repository } from "typeorm";
import { User } from "./database/entities/user.entity";

interface IUserRepository extends Repository<User> {
    findByEmail(email: string): Promise<User | null>;
    findById(id: number): Promise<User | null>;
}

export default class UserRepository extends Repository<User> implements IUserRepository {
    public async findByEmail(email: string): Promise<User | null> {
        return await this.findOne({ where: { email } });
    }

    public async findById(id: number): Promise<User | null> {
        return await this.findOne({ where: { id } });
    }
}