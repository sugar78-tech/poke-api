import { Test, TestingModule } from '@nestjs/testing';
import { databaseProviders } from './database';
import { Provider } from '@nestjs/common';
import * as mongoose from 'mongoose';

describe('Database', () => {
  let provider: Provider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...databaseProviders],
    }).compile();

    provider = module.get<Provider>(databaseProviders[0].provide);
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
