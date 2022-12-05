import { Test, TestingModule } from '@nestjs/testing';
import { CamionetasController } from './camionetas.controller';

describe('CamionetasController', () => {
  let controller: CamionetasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CamionetasController],
    }).compile();

    controller = module.get<CamionetasController>(CamionetasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
