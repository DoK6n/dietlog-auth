import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';

@Module({
  imports: [AuthModule],
  controllers: [MembersController],
  exports: [MembersService],
  providers: [MembersService],
})
export class MembersModule {}
