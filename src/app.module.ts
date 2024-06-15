import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ContactsModule } from './contacts/contacts.module';
import { SpamModule } from './spam/spam.module';
import { User } from './users/user.entity';
import { Contact } from './contacts/contact.entity';
import { Spam } from './spam/spam.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cpmve3g8fa8c73apbq50-a',
      port: 5432,
      username: 'shivam',
      password: 'mapHzD2wggTPAAmQrnFN9ZkUWQ0NF8Dr',
      database: 'spamdb',
      entities: [User, Contact, Spam],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ContactsModule,
    SpamModule,
  ],
})
export class AppModule {}
