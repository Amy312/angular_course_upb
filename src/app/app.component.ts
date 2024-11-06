import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from "./add/add.component";
import { FilterComponent } from "./filter/filter.component";
import { ListComponent } from "./list/list.component";
import { CitiesService } from './cities.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddComponent, FilterComponent, ListComponent,  CommonModule, FormsModule, HttpClientModule],
  providers: [CitiesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string  = 'first.angular Amy';
  numero:number = 6;
}
