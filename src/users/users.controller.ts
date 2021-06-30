import { Controller, Get, Post, Body, Param, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { JoinUserDto } from './dto/join-user.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('Users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post('join')
  create(@Body() user: JoinUserDto) {
    return this.UsersService.create(user);
  }

  @UseGuards(AuthGuard('local'))
  @Post()
  async login(@Request() req) {
    return req.user;
  }

  @Post('login/:email')
  findOne(@Param('email') email: string) {
    return this.UsersService.findOne(email);
  }
}
