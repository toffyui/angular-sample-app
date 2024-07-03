import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
