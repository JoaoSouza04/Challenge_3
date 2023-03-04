import { IsNotEmpty } from 'class-validator';

export class UpdateEventDto {
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  dateTime: string;
}