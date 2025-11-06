import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';





interface Motocicleta {
  nombre: string;
  imagen: string; // ruta relativa dentro de assets
  precio: number; // en COP
  motor: string;
  potencia: string;
  torque: string;
  descripcion: string;
}

@Component({
  selector: 'app-motocicletas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './motocicletas.html',
  styleUrls: ['./motocicletas.scss'],
})
export class MotocicletasComponent {
  motocicletas: Motocicleta[] = [
    {
      nombre: 'Classic 350',
      imagen: 'assets/classic-350.png',
      precio: 12300000,
      motor: '349cc, monocilíndrico',
      potencia: '20.2 bhp @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      descripcion:
        'Inspirada en la herencia británica de Royal Enfield, la Classic 350 combina estilo atemporal con ingeniería moderna para viajes cómodos y confiables.',
    },
    {
      nombre: 'Himalayan',
      imagen: 'assets/himalayan.png',
      precio: 18900000,
      motor: '411cc, monocilíndrico',
      potencia: '24.3 bhp @ 6500 rpm',
      torque: '32 Nm @ 4000-4500 rpm',
      descripcion:
        'Diseñada para aventuras on/off-road, la Himalayan es robusta, versátil y lista para explorar cualquier terreno con total confianza.',
    },
    {
      nombre: 'Interceptor 650',
      imagen: 'assets/interceptor.png',
      precio: 28900000,
      motor: '648cc, bicilíndrico paralelo',
      potencia: '47 bhp @ 7150 rpm',
      torque: '52.3 Nm @ 5250 rpm',
      descripcion:
        'Una roadster clásica con un corazón moderno de dos cilindros: suave, potente y perfecta para conducción urbana o paseos largos.',
    },
  ];
}

