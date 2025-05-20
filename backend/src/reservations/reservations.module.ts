import { Module } from '@nestjs/common';
import { ReservationsService } from './services/reservations/reservations.service';
import { ReservationsController } from './controllers/reservations/reservations.controller';

@Module({
  providers: [ReservationsService],
  controllers: [ReservationsController]
})
export class ReservationsModule {}
