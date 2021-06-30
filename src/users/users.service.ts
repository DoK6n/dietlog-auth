import { Injectable } from '@nestjs/common';
import { JoinUserDto } from './dto/join-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  // private readonly users = [{email: 'test@email.com'}]
  create(user: JoinUserDto) {
    const { email, password } = Object.assign(user);

    const hashed = bcrypt.hashSync(password, 10);
    return { email: email, password: hashed };
  }

  findOne(email: string) {
    return { email: email, password: '11' };
  }
}
