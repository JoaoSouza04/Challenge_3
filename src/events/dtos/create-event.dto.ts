import { IsEmail, IsString, IsNotEmpty, Matches } from 'class-validator';

export class CreateEventDto {

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  dateTime: string;
}