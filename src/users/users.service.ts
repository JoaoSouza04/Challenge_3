import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UpdateUserDto } from './dtos/update-user.dto';


@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) { }


  async create(
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

  async findAll() {
    return await this.repo.find({
      select: ['id', 'firstName', 'lastName', 'birthDate', 'city', 'country', 'email']
    });
  }

  async findOne(id: string) {
    return await this.repo.findOneBy({ id });
  }

  async update(id: string, data) {

    const user = await this.repo.findOneBy({ id });
    console.log(user)
    this.repo.merge(user, data);
    return await this.repo.save(user);
  }

  async delete(id: string) {
    if (!id) throw new NotFoundException;
    return await this.repo.delete(id);
  }
}
