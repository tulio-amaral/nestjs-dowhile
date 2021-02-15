import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DogBreed } from 'src/database/entities/DogBreed.entity';
import { Repository } from 'typeorm';
import { CreateBreedDTO } from './dtos/crete-breed.dto';

@Injectable()
export class BreedsService {
  constructor(
    @InjectRepository(DogBreed)
    private breedRepository: Repository<DogBreed>,
  ) {}

  findAll(): Promise<DogBreed[]> {
    return this.breedRepository.find();
  }

  findById(id: string): Promise<DogBreed> {
    return this.breedRepository.findOne(id);
  }

  create({ name, PictureUrl }: CreateBreedDTO) {
    this.breedRepository.insert({ name, PictureUrl });
  }

  delete(id: string) {
    this.breedRepository.delete(id);
  }

  update(id: string, { name, PictureUrl }: CreateBreedDTO) {
    this.breedRepository.update(id, { name, PictureUrl });
  }
}
