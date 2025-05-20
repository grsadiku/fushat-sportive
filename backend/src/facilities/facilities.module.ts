import { Module } from '@nestjs/common';
import { FacilitesController } from './controllers/facilites/facilites.controller';
import { FacilitesService } from './services/facilites/facilites.service';

@Module({
  controllers: [FacilitesController],
  providers: [FacilitesService]
})
export class FacilitiesModule {}
