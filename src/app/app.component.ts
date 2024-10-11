import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { data } from '../data/data';
import { ListComponent } from "./list/list.component";
import { IPerson } from '../data/interfaces';
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';
import { SearchComponent } from "./search/search.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, CardComponent, CommonModule, SearchComponent],
templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  
  


  list_people: IPerson[] = []
  type_c = ""
  title: string = "";
  public getType():string{
    return this.type_c 
  }

  ngOnInit(): void {
    this.list_people = Object.values(data) as IPerson[];
  }


  filteredPeople: IPerson[] = [...this.list_people]; 
  
  onSearch(query: string): void {
    console.log(query)
    if(query.length>0){
      this.filteredPeople = this.list_people.filter(person =>
        person.name.toLowerCase().includes(query.toLowerCase()) ||
        person.lastName.toLowerCase().includes(query.toLowerCase())
      )
      this.list_people = this.filteredPeople
    }
    else {
      this.list_people = Object.values(data) as IPerson[];
    }
    

    

  }

  person!: IPerson
  public sendCard(person: IPerson): void {
    this.person = person

  }
}
