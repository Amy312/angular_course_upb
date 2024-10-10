import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IInformation, IPerson } from '../../data/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})


export class ItemComponent {
  @Input() information!: IInformation 
  @Input() type_item!: string
  @Output() delete = new EventEmitter<string>();
  @Output() show = new EventEmitter<IPerson>();


  deleteItem():void{
    console.log("Pressed delete", this.information.name)
    if(this.information.name!= undefined){
      this.delete.emit(this.information.name); 
    }
  }

  showItem():void{
    console.log("Pressed show", this.information.name)
    if(this.information.person!= undefined){
      this.show.emit(this.information.person); 
    }
  }

  getBackgroundStyle(type_item: string, type_p: string): any {
    if (type_item === 'type-list') {
      return {
        'background-color': type_p === 'student' ? 'lightblue' : 'beige'
      };
    } else if (type_item === 'type-message') {
      return { 'background-color': 'white' };
    }
    return { 'background-color': 'lightgray' };
  }
}

