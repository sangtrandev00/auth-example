import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  // Create a getUsers method that returns all users
  getUsers() {
    return 'This action returns all users';
  }
}
