import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';





@Component({
  selector: 'app-motocicletas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './motocicletas.html',
  styleUrls: ['./motocicletas.scss'],
}) 
export class MotocicletasComponent {
  // Necesario para evitar errores del template si existe un @for antiguo;
  // queda vacío para no mostrar listas adicionales.
  motocicletas: any[] = [];
}

