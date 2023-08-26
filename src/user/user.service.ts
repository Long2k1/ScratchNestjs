import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schemas';

// This should be a real class/interface representing a user entity

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  private readonly user = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
    {
      userId: 3,
      username: 'admin',
      password: 'admin',
    },
  ];

  async findOne(username: string): Promise<any | undefined> {
    return await this.userModel.find((user) => user === username).exec();
  }

  async removeOne(userId: string): Promise<any | undefined> {
    await this.userModel.findByIdAndRemove(userId).exec();

    return { status: 'Success' };
  }

  async getAll(): Promise<any> {
    return await this.userModel.find().exec();
  }

  async addOne(userDto: User): Promise<any | undefined> {
    const createdUserModel = new this.userModel(userDto);
    createdUserModel.save();
    return { status: 'Success', new: this.user };
  }

  getHello(): string {
    return '';
  }
}
