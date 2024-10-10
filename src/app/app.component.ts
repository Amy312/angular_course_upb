import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { data } from '../data/data';
import { ListComponent } from "./list/list.component";
import { IPerson } from '../data/interfaces';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  list_people: IPerson[] = []
  type_c = ""
  public getType():string{
    return this.type_c 
  }

  ngOnInit(): void {
    this.list_people = Object.values(data) as IPerson[];
  }


}
