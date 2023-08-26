import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
// import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object

    const accessTokenPayload = { username: username, timeStamp: new Date() };
    const accessToken = await this.jwtService.signAsync(accessTokenPayload);

    return accessToken;
  }

  async signUp(username: string, password: string): Promise<any> {
    try {
      // return userList;
      return '';
    } catch (e) {
      return 'Error';
    }
  }

  async removeUser(username: string): Promise<any> {
    try {
      const userList = await this.userService.removeOne(username);
      return userList;
    } catch (e) {
      return e;
    }
  }
}
