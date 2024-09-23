import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Doe', age: 26 },
    { id: 3, name: 'Smith', age: 27 },
  ];

  findAll() {
    return this.users;
  }

  create(user: { id: number; name: string; age: number }) {
    this.users.push(user);
    return { message: 'User created', user };
  }

  findOne(id: number) {
    console.log('id', id);
    return this.users.find(user => user.id === id) || { message: 'User not found' };
  }
}
