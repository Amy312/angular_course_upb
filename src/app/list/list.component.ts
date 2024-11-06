import { Component, Input, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  @Input() cities: { id: number; name: string }[] = [];

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.citiesService.getCities().subscribe((cities) => (this.cities = cities));
  }

  deleteCity(name: string): void {
    this.citiesService.deleteCity(name);
  }
}
