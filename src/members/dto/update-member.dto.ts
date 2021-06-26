import { PartialType } from '@nestjs/mapped-types';
import { JoinMemberDto } from './join-member.dto';

export class UpdateMemberDto extends PartialType(JoinMemberDto) {}
