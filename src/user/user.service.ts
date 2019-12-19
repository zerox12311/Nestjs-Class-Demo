import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './model/user.entity';
import { Repository } from 'typeorm';
import { UserCreateDto, UserUpdateDto } from './dto/user.dto';

// 泛型
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(id: number): Promise<User> {
        return await this.userRepository.findOneOrFail(id);
    }

    async createOne(userCreateDto: UserCreateDto) {
        return await this.userRepository.save(userCreateDto);
    }

    async updateOne(id: number, userUpdateDto: UserUpdateDto) {
        return await this.userRepository.update(id, userUpdateDto);
    }

    async deleteOne(id: number) {
        return await this.userRepository.delete(id);
    }

}
