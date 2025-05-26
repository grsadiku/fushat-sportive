import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservations } from 'src/entities/reservations.entity';
import {
  CreateReservationDto,
  UpdateReservationDto,
} from 'src/reservations/dto/reservations.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservations)
    private reservationRepo: Repository<Reservations>,
  ) {}

  async create(data: CreateReservationDto): Promise<Reservations> {
    const reservation = this.reservationRepo.create(data);
    return this.reservationRepo.save(reservation);
  }

  async findAll(): Promise<any[]> {
    const reservations = await this.reservationRepo.find({
      relations: ['facility', 'facility.sport', 'entryUser'],
    });

    return reservations.map((r) => ({
      ID: r.ID,
      Title: r.Title,
      ReservationDate: r.ReservationDate,
      ReservationEndDate: r.ReservationEndDate,
      IsRecurring: r.IsRecurring,
      IDFacility: r.IDFacility,
      FacilityTitle: r.facility?.Title || null,
      FacilityLocation: r.facility?.Location || null,
      FacilitySport: r.facility?.sport?.Title || null, // assumes sport has a 'Title' column
      IDEntryUser: r.IDEntryUser,
      EntryUserFullName: r.entryUser
        ? `${r.entryUser.FirstName} ${r.entryUser.LastName}`
        : null,
      EntryDate: r.EntryDate,
    }));
  }

  async findOne(id: number): Promise<Reservations> {
    const reservation = await this.reservationRepo.findOne({
      where: { ID: id },
      relations: ['facility', 'entryUser'],
    });
    if (!reservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
    return reservation;
  }

  async update(id: number, data: UpdateReservationDto): Promise<Reservations> {
    const reservation = await this.findOne(id);
    Object.assign(reservation, data);
    return this.reservationRepo.save(reservation);
  }

  async delete(id: number): Promise<void> {
    const result = await this.reservationRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
  }
}
