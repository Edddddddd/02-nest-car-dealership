import { Injectable } from '@nestjs/common';
import { CARS_SEDD } from './data/cars.data';
import { BRANDS_SEDD } from './data/brads.data';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}
  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEDD);
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEDD);
    return 'Seed executed';
  }
}
