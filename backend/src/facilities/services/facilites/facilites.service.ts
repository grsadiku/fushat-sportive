import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Facilities } from 'src/entities';
import { CreateFacilityDto } from 'src/facilities/dto/facilities.dto';
import { Repository } from 'typeorm';

@Injectable()
export class FacilitesService {
  constructor(
    @InjectRepository(Facilities)
    private readonly facilityRepository: Repository<Facilities>,
  ) {}

  createFacility(createFacilityDto: CreateFacilityDto) {
    const newFacility = this.facilityRepository.create(createFacilityDto);
    return this.facilityRepository.save(newFacility);
  }

  findFacilityById(id: number) {
    return this.facilityRepository.findOneById(id);
  }
  getFacilities() {
    return this.facilityRepository.find();
  }
}
