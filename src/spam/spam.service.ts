import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Spam } from './spam.entity';

@Injectable()
export class SpamService {
  constructor(
    @InjectRepository(Spam)
    private spamRepository: Repository<Spam>,
  ) {}

  async markAsSpam(phone: string): Promise<Spam> {
    let spam = await this.spamRepository.findOne({ where: { phone } });
    if (spam) {
      spam.count++;
    } else {
      spam = this.spamRepository.create({ phone, count: 1 });
    }
    return this.spamRepository.save(spam);
  }

  async findSpam(phone: string): Promise<Spam> {
    return this.spamRepository.findOne({ where: { phone } });
  }
}
