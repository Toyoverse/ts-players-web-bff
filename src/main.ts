import * as cors from 'cors';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options: cors.CorsOptions = {
    methods: ['GET', 'POST'],
    origin: ['https://toyoverse-dev-front.herokuapp.com', 'http://localhost'],
  };

  app.enableCors(options);
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Toyoverse Player BFF')
    .setDescription('The Toyoverse Player API description')
    .setVersion('1.0.3')
    .addTag('player')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
