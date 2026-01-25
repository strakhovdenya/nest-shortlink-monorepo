import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

export async function createApp() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    customCssUrl:
      'https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui.css',
    customJs: [
      'https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui-bundle.js',
      'https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui-standalone-preset.js',
    ],
  });

  return app;
}
