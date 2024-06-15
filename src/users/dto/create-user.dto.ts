import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsString()
  password: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}
