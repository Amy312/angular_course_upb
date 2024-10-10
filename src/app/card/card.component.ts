import { Component, Input, Output } from '@angular/core';
import { IInformation, IPerson } from '../../data/interfaces';
import { ItemComponent } from "../item/item.component";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'card',
  standalone: true,
  imports: [ItemComponent, SearchComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() type_card: string = ""
  @Input() person!: IPerson 

  showPerson(person: IPerson): void {
    // Filter the list and remove the person
    console.log("message received")
    this.person = person
    
    console.log("message completed", person)

  }  public getInformation(message: string): IInformation{
    const info:IInformation = {
      message: message
    }

    return info
  }
  
  public getScore(): number {
    return (this.person.finalTestScore! + this.person.secondTestScore! + this.person.firstTestScore!)/3
  }
}
