import { Component, EventEmitter, Output } from '@angular/core';
import { CitiesService } from '../cities.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  filter = '';
  cities: { id: number; name: string }[] = [];
  
  @Output() filteredCities = new EventEmitter<{ id: number; name: string }[]>();

  constructor(private citiesService: CitiesService) {}

  applyFilter(): void {
    this.citiesService.getCities().subscribe((cities) => {
      this.cities = cities.filter(city =>
        city.name.toLowerCase().includes(this.filter.toLowerCase())
      );
      this.filteredCities.emit(this.cities);
    });
  }
}
