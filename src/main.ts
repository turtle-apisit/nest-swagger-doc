import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 8080;

  //swagger
  const config = new DocumentBuilder()
    .setTitle('Test API Documentation') 
    .setDescription('The API description') 
    .setVersion('1.0') // เวอร์ชันของ API
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // กำหนดเส้นทางสำหรับ Swagger (เช่น /api)


  // ใช้ ValidationPipe ในการตรวจสอบข้อมูลที่ส่งเข้ามา
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () => {
    console.log(`Application is running on: http://localhost:${port}`);
    console.log(`Swagger is running on: http://localhost:${port}/api`);
  });
}
bootstrap();
