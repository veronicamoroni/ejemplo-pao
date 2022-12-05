import { Injectable } from '@nestjs/common';

@Injectable()
export class CamionetasService {
  obtenerCamionetas(): string {
    return 'partner!';
  }
  crearCamionetas(): string {
    return 'creado exitosamente!';
  }
}
