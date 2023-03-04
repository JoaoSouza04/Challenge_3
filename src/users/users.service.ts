import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UpdateUserDto } from './dtos/update-user.dto';
import { compareSync } from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) { }


  async signUp(
    firstName: string, lastName: string,
    birthDate: string, city: string,
    country: string, email: string,
    password: string, passwordConfirm: string) {

    if (password != passwordConfirm) throw new Error("The passwords are not equal!");

    const user = await this.repo.create({
      firstName, lastName,
      birthDate, city, country,
      email, password, passwordConfirm
    })
    return this.repo.save(user);
  }

  async signIn(email: string, password: string) {
    const user = await this.repo.findOneBy({ email });

    let isPasswordValid = compareSync(password, user.password);

    if (!isPasswordValid) throw new UnauthorizedException;

    return user;
  }

  async update(id: string, data: UpdateUserDto) {

    const user = await this.repo.findOneBy({ id });

    this.repo.merge(user, data);
    return await this.repo.save(user);
  }

  async delete(id: string) {
    if (!id) throw new NotFoundException;
    return await this.repo.delete(id);
  }
}
