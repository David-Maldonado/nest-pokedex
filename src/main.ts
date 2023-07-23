import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //solo va a mostar las propiedades que espera o definidas en el dto.
      forbidNonWhitelisted: true, //esto va a mostar un error avisando que no se esperaban las propiedades esperadas.
    }),
  );
  await app.listen(3000);
}
main();
