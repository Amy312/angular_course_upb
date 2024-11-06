import { Component, EventEmitter, Output } from '@angular/core';
import { CitiesService } from '../cities.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  filter = '';

  @Output() filteredCities = new EventEmitter<{ id: number; name: string }[]>();

  constructor(private citiesService: CitiesService) {}

  applyFilter(): void {
    this.citiesService.getCities().subscribe((cities) => {
      const filtered = cities.filter(city =>
        city.name.toLowerCase().includes(this.filter.toLowerCase())
      );
      this.filteredCities.emit(filtered); 
    });
  }
}
