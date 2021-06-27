import { Injectable } from '@nestjs/common';
import { JoinMemberDto } from './dto/join-member.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MembersService {
  // private readonly users = [{email: 'test@email.com'}]
  create(member: JoinMemberDto) {
    const { id, password } = Object.assign(member);

    const hashed = bcrypt.hashSync(password, 10);
    return { id, hashed };
  }

  findOne(email: string) {
    return { email: email, password: '11' };
  }
}
