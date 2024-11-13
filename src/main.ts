import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Jordan Valencia NESTJS Project')
    .setVersion('1.0')
    .setContact('Jordan', 'https://github.com/Jordan-Valencia', 'jordanvalenciadev@gmail.com')
    .build();

  // Aquí creamos el documento directamente
  const document = SwaggerModule.createDocument(app, config);

  // Configuramos Swagger usando el documento creado
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: 'http://localhost:3000/',
  });

  await app.listen(3000);
}

bootstrap();
