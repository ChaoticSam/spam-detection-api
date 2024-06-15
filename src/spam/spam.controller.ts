import { Controller, Post, Param } from '@nestjs/common';
import { SpamService } from './spam.service';

@Controller('spam')
export class SpamController {
  constructor(private readonly spamService: SpamService) {}

  @Post(':phone')
  async markAsSpam(@Param('phone') phone: string) {
    return this.spamService.markAsSpam(phone);
  }
}
