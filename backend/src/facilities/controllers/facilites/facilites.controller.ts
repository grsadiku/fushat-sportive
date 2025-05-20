import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateFacilityDto } from 'src/facilities/dto/facilities.dto';
import { FacilitesService } from 'src/facilities/services/facilites/facilites.service';

@Controller('facilites')
export class FacilitesController {
  constructor(private readonly facilitiesService: FacilitesService) {}

  @Get()
  getUsers() {
    return this.facilitiesService.getFacilities();
  }

  @Get('id/:id')
  findUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.facilitiesService.findFacilityById(id);
  }

  @Post('create')
  //   @UsePipes(ValidationPipe)
  createUsers(@Body() createFacilityDto: CreateFacilityDto) {
    return this.facilitiesService.createFacility(createFacilityDto);
  }
}
