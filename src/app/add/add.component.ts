import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CitiesService } from '../cities.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  newCity: string = '';
  @Input() errorMessage: string = ''; 

  @Output() addCity = new EventEmitter<string>();

  onAddCity(): void {
    if (!this.newCity.trim()) {
      this.errorMessage = 'City name cannot be empty.';
      return;
    }

    this.errorMessage = '';
    this.addCity.emit(this.newCity.trim());
    this.newCity = '';  
  }
}