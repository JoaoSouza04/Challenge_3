import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Param,
  ParseUUIDPipe
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post()
  async signUp(@Body() body: CreateUserDto) {

    return await this.usersService.signUp(
      body.firstName,
      body.lastName,
      body.birthDate,
      body.city,
      body.country,
      body.email,
      body.password,
      body.passwordConfirm
    )
  }

  @Post('/login')
  async signIn(@Body() body: LoginUserDto) {
    return await this.usersService.signIn(body.email, body.password);
  }

  @Put('/:id')
  async update(@Param('id', new ParseUUIDPipe) id: string, @Body() body: UpdateUserDto) {
    return await this.usersService.update(id, body)
  }

  @Delete()
  async delete(@Param('id', new ParseUUIDPipe) id: string) {
    await this.usersService.delete(id)
  }
}
