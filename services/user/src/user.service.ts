import { NotFoundError } from "../../../common/errors/NotFoundError";
import { User } from "./database/entities/user.entity";
import UserRepository from "./user.repository";
import { UserDto } from "./user.dto";

export default class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    public async createUser(email: string, password: string): Promise<UserDto> {
        const user = this.userRepository.create({ email, password });
        return this.mapUserToDto(user);
    }

    public async getUser(id: number): Promise<UserDto> {
        const user = await this.userRepository.findById(id);
        if (!user) throw new NotFoundError(`User with id ${id} not found`);
        return this.mapUserToDto(user);
    }

    private mapUserToDto(user: User): UserDto {
        return {
            id: user.id,
            email: user.email
        };
    }
}