import { Test, TestingModule } from '@nestjs/testing';
import { ConectorsController } from './conectors.controller';

describe('ConectorsController', () => {
  let controller: ConectorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConectorsController],
    }).compile();

    controller = module.get<ConectorsController>(ConectorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
