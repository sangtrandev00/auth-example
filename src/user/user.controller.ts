import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Write a get method that returns all users
  // Use the userService to get all users

  @Get('get_all')
  async getUsers() {
    return this.userService.getUsers();
  }
}
