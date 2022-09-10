import * as cors from 'cors';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Toyoverse Player BFF')
    .setDescription('The Toyoverse Player API description')
    .setVersion('1.0.3')
    .addTag('player')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const options: cors.CorsOptions = {
    methods: 'GET,POST,OPTIONS',
    origin: '*',
  };

  app.use(cors(options));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
