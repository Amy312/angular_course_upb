import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { City } from '../cities.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <ul *ngIf="cities && cities.length > 0">
      <li *ngFor="let city of cities" (click)="onDeleteCity(city.name)">
        {{ city.name }}
      </li>
    </ul>
    <p *ngIf="cities && cities.length === 0">No cities available.</p>
  `,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() cities:City[] = [];
  @Output() deleteCity = new EventEmitter<string>(); 

  ngOnInit(): void {
    console.log(this.cities);
  }

  onDeleteCity(name: string): void {
    console.log(`Delete city: ${name}`);
    this.deleteCity.emit(name);  // Emit city name to parent component
  }
}
