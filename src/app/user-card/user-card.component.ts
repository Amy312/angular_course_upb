import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit, OnDestroy {
  @Input() name: string = ''
  @Input() email:string = ''

  @Output() sendData = new EventEmitter()

  ngOnInit(): void {
      console.log("user card on init")
  }

  ngOnDestroy(): void {
      console.log("user card on destroy")
  }
  public onSendData() {
    console.log('onSendData in child')
    this.sendData.emit('Hola desde el hijo')

  }

}

