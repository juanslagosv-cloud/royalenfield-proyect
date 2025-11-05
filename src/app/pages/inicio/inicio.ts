import { Component } from '@angular/core';
import { RoyalEnfieldInfoComponent } from '../../components/royal-enfield-info/royal-enfield-info';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RoyalEnfieldInfoComponent],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class InicioComponent {

}
