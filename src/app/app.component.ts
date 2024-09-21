import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title:string  = 'first.angular Amy';
  numero:number = 6;

  constructor(){
    console.log('subtract ', this.subtract(8,4))
  }

  public sum(n1: number, n2: number):number {
    return n1+n2
  }

  private subtract(n1: number, n2: number):number {
    return n1-n2
  }
}
