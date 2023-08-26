import { Controller, Get, UseGuards, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/authenticate/auth.guard';
import { User } from 'src/schemas/user.schemas';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get('user/')
  getAll(): User | any {
    async () => {
      return await this.userService.getAll();
    };
  }

  @UseGuards(AuthGuard)
  @Post('user/')
  addOne(userDto: User): User | any {
    async () => {
      try {
        await this.userService.addOne(userDto);
      } catch (e) {
        console.log(e);
      }
    };
  }
}
