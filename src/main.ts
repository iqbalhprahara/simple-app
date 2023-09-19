import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Simple App API')
    .setDescription('This is the documentation for Simple App API.')
    .setVersion('0.0.1')
    .addTag('simple-app')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig, {
    operationIdFactory: (controllerKey: string, methodKey: string) => `${methodKey}`,
  });
  
  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
