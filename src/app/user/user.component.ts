import { Component, Input } from '@angular/core';
import { UserData } from '../data/interfaces';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from "../notification/notification.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, NotificationComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user: UserData | undefined;
  activeTab: 'user' | 'notifications' = 'user'; // Estado para controlar la pestaña activa

  setActiveTab(tab: 'user' | 'notifications') {
    this.activeTab = tab;
  }
}
