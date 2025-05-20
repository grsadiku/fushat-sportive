import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sport } from 'src/entities/sport.entity';
import { CreateSportDto } from 'src/sports/dto/sports.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SportsService {
  constructor(
    @InjectRepository(Sport)
    private readonly sportRepository: Repository<Sport>,
  ) {}

  createSport(createSportDto: CreateSportDto) {
    const newSport = this.sportRepository.create(createSportDto);
    return this.sportRepository.save(newSport);
  }

  findSportById(id: number) {
    return this.sportRepository.findOneById(id);
  }

  getSports() {
    return this.sportRepository.find({
      where: { IsActive: true },
    });
  }
}
