import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}
  // No olvidar que la funcion de los controladores es escuchar solicitudes ya retornar respuestas. (no debe contener mucha logica)
  @Get()
  executeSeed() {
    return this.seedService.executeSeed();
  }
}
