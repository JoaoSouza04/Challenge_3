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
import { CreateEventDto } from './dtos/create-event.dto';
import { UpdateEventDto } from './dtos/update-event.dto';
import { EventsService } from './events.service';

@Controller('/api/v1/events')
export class EventsController {
  constructor(private eventsService: EventsService) { }

  @Post()
  async createEvent(@Body() body: CreateEventDto) {

    return await this.eventsService.createEvent(
      body.description,
      body.dateTime
    )
  }

  @Get()
  async getAll() {
    return this.eventsService.getAll();
  }

  @Get('/:id')
  async getOne(@Param('id') id: string) {
    return this.eventsService.getOne(id);
  }

  @Put('/:id')
  async update(@Param('id', new ParseUUIDPipe) id: string, @Body() body: UpdateEventDto) {
    return await this.eventsService.updateEvent(id, body)
  }

  @Delete('/:id')
  async delete(@Param('id', new ParseUUIDPipe) id: string) {
    await this.eventsService.deleteEvent(id)
  }
}
