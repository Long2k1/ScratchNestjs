import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('auth/login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('auth/register')
  signUp(@Body() signUpDto: Record<string, any>) {
    return this.authService.signUp(signUpDto.username, signUpDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('auth/remove')
  removeUser(@Body() removeUserDto: Record<string, any>) {
    return this.authService.removeUser(removeUserDto.username);
  }
}
