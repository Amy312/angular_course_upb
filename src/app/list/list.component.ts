import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { IInformation, IPerson } from '../../data/interfaces';

@Component({
  selector: 'list',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() people!: IPerson[]
  @Output() showCard = new EventEmitter<IPerson>();

  public getInformation(person: IPerson): IInformation{
    const info:IInformation = {
      name: person.name.concat(" ").concat(person.lastName),
      type_p: person.type,
      person: person
    }

    return info
  }

  deletePerson(person_name: string): void {
    console.log("message received", this.people.length)
    this.people = this.people.filter(p => 
      p.name.concat(" ").concat(p.lastName) != person_name)
    
    console.log("message completed", person_name, this.people.forEach((p)=>( p.name.concat())))

  }

  showPerson(person: IPerson): void {
    console.log("message received", person)
    this.showCard.emit(person); 


  }
}
