import { createUserDto } from './dtos/createUser.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() createUser: createUserDto) {
    return { ...createUser, password: undefined };
  }
}
