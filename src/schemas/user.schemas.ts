import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

type userRole = 'admin' | 'user';

@Schema()
export class User {
  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  role: userRole;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  friends: Array<User>;

  @Prop()
  is_activate: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
