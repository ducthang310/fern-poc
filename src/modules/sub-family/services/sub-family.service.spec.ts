import { Test, TestingModule } from '@nestjs/testing';
import { SubFamilyService } from './sub-family.service';

describe('SubFamilyService', () => {
  let service: SubFamilyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubFamilyService],
    }).compile();

    service = module.get<SubFamilyService>(SubFamilyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
