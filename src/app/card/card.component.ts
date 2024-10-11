import { Component, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IInformation, IPerson } from '../../data/interfaces';
import { ItemComponent } from "../item/item.component";
import { SearchComponent } from "../search/search.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card',
  standalone: true,
  imports: [ItemComponent, SearchComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit, OnChanges{
  @Input() type_card: string = ""
  @Input() person!: IPerson 

  messages:string[] = [""]

  ngOnInit(): void {
    if(this.person.messages.length>0){
      this.messages = this.person.messages
    }else {
      this.messages = [""]
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
     if( this.type_card== "messages"){
      this.messages = this.person.messages

     }
  }
  showPerson(person: IPerson): void {
    console.log("message received lalaal")
    this.person = person
    this.messages = this.person.messages
    console.log("message completed", this.messages)

  }  public getInformation(message: string): IInformation{
    const info:IInformation = {
      message: message
    }

    return info
  }
  
  public getScore(): number {
    return (this.person.finalTestScore! + this.person.secondTestScore! + this.person.firstTestScore!)/3
  }
  onSearch(query: string):void{
    console.log(query)
    if(query.length>0){
      const filteredMessages = this.person.messages.filter(message => 
        message.toLowerCase().includes(query.toLowerCase()))
      console.log(filteredMessages)
      this.messages = filteredMessages
    }
    else{
      this.messages = this.person.messages
    }
    
  }

  getBackgroundStyle(): any {
    if (this.type_card === 'personal') {
      return {
        'background-color': 'beige'
      };
    } else if (this.type_card === 'geographic') {
      return { 'background-color': 'lightblue' };
    }
    return { 'background-color': 'lightgray' };
  }
}
