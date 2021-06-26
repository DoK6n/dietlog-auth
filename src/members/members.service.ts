import { Injectable } from '@nestjs/common';
import { JoinMemberDto } from './dto/join-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MembersService {
  create(member: JoinMemberDto) {
    const { id, password } = Object.assign(member);

    const hashed = bcrypt.hashSync(password, 10);
    return { id, password, hashed };
  }

  findAll() {
    return `This action returns all members`;
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
