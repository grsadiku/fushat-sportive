import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateSportDto } from 'src/sports/dto/sports.dto';
import { SportsService } from 'src/sports/services/sports/sports.service';

@Controller('sports')
export class SportsController {
  constructor(private readonly sportService: SportsService) {}

  @Get()
  getSports() {
    return this.sportService.getSports();
  }

  @Get(':id')
  findSportById(@Param('id', ParseIntPipe) id: number) {
    return this.sportService.findSportById(id);
  }

  @Post('create')
  //   @UsePipes(ValidationPipe)
  createSport(@Body() createSportDto: CreateSportDto) {
    return this.sportService.createSport(createSportDto);
  }
}
