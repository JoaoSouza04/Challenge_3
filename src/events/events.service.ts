import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './event.entity';
import { UpdateEventDto } from './dtos/update-event.dto';

@Injectable()
export class EventsService {
  constructor(@InjectRepository(Event) private repo: Repository<Event>) { }

  async createEvent(description: string, dateTime: string,) {

    const event = await this.repo.create({ description, dateTime })

    return this.repo.save(event);
  }

  async getAll() {
    return await this.repo.find();
  }

  async getOne(userId: string) {
    const event = await this.repo.findOneBy({ userId });

    if (!event) throw new NotFoundException;
    return event;
  }

  async updateEvent(userId: string, data: UpdateEventDto) {
    const eventFound = await this.repo.findOneBy({ userId });

    this.repo.merge(eventFound, data);
    return await this.repo.save(eventFound);
  }

  async deleteEvent(userId: string) {
    if (!userId) throw new NotFoundException;
    return await this.repo.delete(userId);
  }
}