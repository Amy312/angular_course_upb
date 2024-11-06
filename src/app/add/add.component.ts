import { Component } from '@angular/core';
import { CitiesService } from '../cities.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  newCity = '';
  errorMessage = '';

  constructor(private citiesService: CitiesService) {}

  addCity(): void {
    this.errorMessage = '';
    const error = this.citiesService.addCity(this.newCity);
    if (error) {
      this.errorMessage = error;
    } else {
      this.newCity = '';
    }
  }
}
