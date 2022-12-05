import { Controller,Get } from '@nestjs/common';
import { CamionetasService } from './camionetas.service';

@Controller('camionetas')
export class CamionetasController {
   constructor(private readonly camionetasService: CamionetasService) {}

   @Get()
   getCamionetas(): string {
     return this.camionetasService.obtenerCamionetas();
   } 
}
