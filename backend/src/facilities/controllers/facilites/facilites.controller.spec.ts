import { Test, TestingModule } from '@nestjs/testing';
import { FacilitesController } from './facilites.controller';

describe('FacilitesController', () => {
  let controller: FacilitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacilitesController],
    }).compile();

    controller = module.get<FacilitesController>(FacilitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
