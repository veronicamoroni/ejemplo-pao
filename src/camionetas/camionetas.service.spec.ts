import { Test, TestingModule } from '@nestjs/testing';
import { CamionetasService } from './camionetas.service';

describe('CamionetasService', () => {
  let service: CamionetasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CamionetasService],
    }).compile();

    service = module.get<CamionetasService>(CamionetasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
