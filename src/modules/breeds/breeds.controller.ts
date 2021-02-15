import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DogBreed } from 'src/database/entities/DogBreed.entity';
import { BreedsService } from './breeds.service';
import { CreateBreedDTO } from './dtos/crete-breed.dto';

@Controller('breeds')
export class BreedsController {
  constructor(private readonly breedService: BreedsService) {}

  @Get()
  findAll(): Promise<DogBreed[]> {
    return this.breedService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<DogBreed> {
    return this.breedService.findById(id);
  }

  @Post()
  create(@Body() dto: CreateBreedDTO) {
    this.breedService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.breedService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() { name, PictureUrl }: CreateBreedDTO,
  ) {
    this.breedService.update(id, { name, PictureUrl });
  }
}
