import { Module } from '@nestjs/common';
import { SpamService } from './spam.service';
import { SpamController } from './spam.controller';

@Module({
  providers: [SpamService],
  controllers: [SpamController]
})
export class SpamModule {}
