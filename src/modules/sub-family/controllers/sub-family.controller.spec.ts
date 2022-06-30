import { Test, TestingModule } from '@nestjs/testing';
import { SubFamilyController } from './sub-family.controller';
import { SubFamilyService } from '../services/sub-family.service';

describe('SubFamilyController', () => {
  let controller: SubFamilyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubFamilyController],
      providers: [SubFamilyService],
    }).compile();

    controller = module.get<SubFamilyController>(SubFamilyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
