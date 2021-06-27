import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  memberService: any;
  constructor(private readonly jwtService: JwtService) {}

  async createToken() {
    const member: JwtPayload = { email: 'test@email.com', password: '' };
    const accessToken = this.jwtService.sign(member);
    return {
      email: member.email,
      accessToken,
    };
  }

  async validateMember(payload: JwtPayload): Promise<any> {
    console.log(`validate account ${payload}`);
    console.log(`payload email : ${payload.email}`);

    const member = await this.memberService.findOne(payload.email);
    if (!member || (member && !compare(payload.password, member.password))) return null;

    return member;
    // return {};
  }
}
