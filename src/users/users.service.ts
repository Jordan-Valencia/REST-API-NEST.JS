import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.dto';

@Injectable()
export class UsersService {
  private users: any[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
    },
  ];
  getUsers() {
    return this.users;
  }
  createUser(user: CreateUserDto) {
    this.users.push(user)
    return {
      ...user,
      id: this.users.length + 1,
    };
  }
}
