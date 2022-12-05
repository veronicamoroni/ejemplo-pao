import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CamionetasController } from './camionetas/camionetas.controller';
import { CamionetasService } from './camionetas/camionetas.service';

@Module({
  imports: [],
  controllers: [AppController, CamionetasController],
  providers: [AppService, CamionetasService],
})
export class AppModule {}
