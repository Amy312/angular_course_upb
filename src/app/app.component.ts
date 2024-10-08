import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductModule, ClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string  = 'first.angular Amy';
  numero:number = 6;
}
