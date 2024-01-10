import { Repository } from "typeorm";
import { NotFoundError } from "../../../common/errors/NotFoundError";
import { ConflictError } from "../../../common/errors/ConflictError";
import { User } from "./database/entities/user.entity";
import { UserDto } from "../../../common/dtos/user/user.dto";

export default class UserService {
    constructor(private readonly userRepository: Repository<User>) {}

    public async createUser(email: string, password: string): Promise<UserDto> {
        if (await this.checkIfUserExists(email)) throw new ConflictError(`User with email ${email} already exists`);
        const user = await this.userRepository.save(
            this.userRepository.create({ email, password })
        );
        return this.mapUserToDto(user);
    }

    public async getUser(id: number): Promise<UserDto> {
        const user = await this.userRepository.findOneBy({ id })
        if (!user) throw new NotFoundError(`User with id ${id} not found`);
        return this.mapUserToDto(user);
    }

    private async checkIfUserExists(email: string): Promise<boolean> {
        const user = await this.userRepository.findOne({ where: { email } });
        if (user) return true;
        return false;
    }

    private mapUserToDto(user: User): UserDto {
        return {
            id: user.id,
            email: user.email
        };
    }
}