import { Module } from '@nestjs/common';
import { SportsController } from './controllers/sports/sports.controller';
import { SportsService } from './services/sports/sports.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sport } from 'src/entities/sport.entity';

@Module({
  controllers: [SportsController],
  providers: [SportsService],
  imports: [TypeOrmModule.forFeature([Sport])],
})
export class SportsModule {}
