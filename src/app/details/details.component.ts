import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationService } from '../housing-location/housing-location.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  HousingLocationService = inject(HousingLocationService);
  housingLocation: HousingLocation | undefined;
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.HousingLocationService.getHousingLocationById(housingLocationId);
  }
}
