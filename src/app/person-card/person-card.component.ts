import { Component, Input } from '@angular/core';

@Component({
  selector: 'person-card',
  standalone: true,
  imports: [],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css'
})


export class PersonCardComponent {
  @Input() name: string = ''
  @Input() gender:string = ''
  @Input() age:number = 0


  public haveDiscount(){
    return this.age>18
  }
}

