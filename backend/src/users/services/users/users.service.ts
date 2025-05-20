import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { ReadUserDto } from 'src/users/dto/users-read.dto';
import { CreateUserDto } from 'src/users/dto/users.dtos';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findUsersById(id: number) {
    return this.userRepository.findOneById(id);
  }

  async getUsers(): Promise<ReadUserDto[]> {
    var users = await this.userRepository.find({ relations: ['role'] });
    return users.map((user) => ({
      ID: user.ID,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Email: user.Email,
      Role: user.role ? user.role.Title : null,
      IDRole: user.IDRole,
      PhoneNumber: user.PhoneNumber,
      Name: user.FirstName + ' ' + user.LastName,
      Birthdate: user.Birthdate,
      IsActive: user.IsActive,
      IsDeleted: user.IsDeleted,
      Password: user.Password,
    }));
  }

  editUser(editUserDto: CreateUserDto) {
    // const userForEdit: CreateUserDto = {};
    // const newUser = this.userRepository.update(userForEdit);
    // return this.userRepository.save(newUser);
  }
}
