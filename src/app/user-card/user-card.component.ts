import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name: string = ''
  @Input() email:string = ''

  @Output() sendData = new EventEmitter()

  password:string = ''

  ngOnInit(): void {
      console.log("user card on init")
          // this.password = this.name + ' ' +  this.email + ' PASSWORD'

  }

  ngOnDestroy(): void {
      console.log("user card on destroy")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGES:', changes)
    this.password = changes['name'].currentValue + ' ' + changes['email'].currentValue + ' PASSWORD'
  }

  public onSendData() {
    console.log('onSendData in child')
    this.sendData.emit('Hola desde el hijo')

  }

}

