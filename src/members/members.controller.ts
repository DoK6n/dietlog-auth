import { Controller, Get, Post, Body, Param, Request } from '@nestjs/common';
import { MembersService } from './members.service';
import { JoinMemberDto } from './dto/join-member.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post('join')
  create(@Body() member: JoinMemberDto) {
    return this.membersService.create(member);
  }

  @UseGuards(AuthGuard('local'))
  @Post()
  async login(@Request() req) {
    return req.member;
  }

  @Post('login/:email')
  findOne(@Param('email') email: string) {
    return this.membersService.findOne(email);
  }
}
