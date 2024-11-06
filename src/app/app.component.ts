import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from "./add/add.component";
import { FilterComponent } from "./filter/filter.component";
import { ListComponent } from "./list/list.component";
import { CitiesService, City } from './cities.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddComponent, FilterComponent, ListComponent,  CommonModule, FormsModule],
  providers: [CitiesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  cities: City[] = []; 
  errorMessage: string = ''; 

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.loadCities();  
  }

  loadCities(): void {
    const storedCities = localStorage.getItem('cities');
    if (storedCities) {
      this.cities = JSON.parse(storedCities);  
    } else {
      this.citiesService.getCities().subscribe((data: City[]) => {
        this.cities = data;
        this.saveToLocalStorage();  
      });
    }
  }

  updateFilteredCities(filteredCities: City[]): void {
    this.cities = filteredCities;
  }

  addNewCity(name: string): void {
    if (this.cities.some(city => city.name.toLowerCase() === name.toLowerCase())) {
      this.errorMessage =`City "${name}" already exists in the list.`;
      return;
    }

    const newCity: City = { id: Date.now(), name };
    this.cities.push(newCity);  
    this.saveToLocalStorage();
    this.errorMessage = ''; 
    console.log(`City "${name}" added to the list`);
  }


  removeCity(name: string): void {
    this.cities = this.cities.filter(city => city.name !== name); 
    this.saveToLocalStorage(); 
    console.log(`City ${name} removed from the list`);
  }

  saveToLocalStorage(): void {
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }
}