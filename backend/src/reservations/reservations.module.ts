import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservations } from 'src/entities/reservations.entity';
import { ReservationsController } from './controllers/reservations/reservations.controller';
import { ReservationService } from './services/reservations/reservations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reservations])],
  controllers: [ReservationsController],
  providers: [ReservationService],
})
export class ReservationsModule {}
