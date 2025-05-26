import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateReservationDto,
  UpdateReservationDto,
} from 'src/reservations/dto/reservations.dto';
import { ReservationService } from 'src/reservations/services/reservations/reservations.service';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  create(@Body() createDto: CreateReservationDto) {
    return this.reservationService.create(createDto);
  }

  @Get()
  findAll() {
    return this.reservationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateReservationDto) {
    return this.reservationService.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationService.delete(+id);
  }
}
