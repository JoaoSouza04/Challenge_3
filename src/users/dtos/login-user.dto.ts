import { IsEmail, IsString, IsNotEmpty, Matches } from 'class-validator';

export class LoginUserDto {

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}