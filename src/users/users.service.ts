import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { SaveUserDto } from './dto/saveUser.dto';
import { User } from './user.entity';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async findUserById(id: number): Promise<User> {
        const user: User = await this.userRepository.findOne({where: {id: id}});

        if (!user) {
            throw new NotFoundException('User Not Found');
        }
        return user;
    }

    async signUp(requestDto: SaveUserDto): Promise<User> {
        const user: User = await this.userRepository.findOne({where: {email: requestDto.email}});

        if (user) {
            throw new BadRequestException('Duplicated Email');
        }
        requestDto.password = await bcrypt.hash(requestDto.password, 12);
        return await this.userRepository.save(requestDto);
    }
}
