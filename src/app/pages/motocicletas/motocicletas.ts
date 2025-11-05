import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';





@Component({
  selector: 'app-motocicletas',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './motocicletas.html',
  styleUrls: ['./motocicletas.scss'],
})
export class MotocicletasComponent {
  // Local product model to remove dependency on the deleted service
  motocicletas: Array<{
    id: number;
    nombre: string;
    description: string;
    precio: number;
    imagen: string;
  }> = [
    {
      id: 1,
      nombre: 'Himalayan',
      description:
        'Ideal para viajes de aventura y exploración en terrenos montañosos.',
      precio: 28000000,
      imagen: 'assets/himalayan.png',
    },
    {
      id: 2,
      nombre: 'Classic 350',
      description:
        'Ideal para ciudad y viajes cortos, recordando el estilo retro que roba miradas',
      precio: 16000000,
      imagen: 'assets/classic-350.png',
    },
    {
      id: 3,
      nombre: 'Interceptor 650',
      description:
        'Ideal para viajes largos y comodidad en la carretera.',
      precio: 32000000,
      imagen: 'assets/interceptor.png',
    },
  ];
}

