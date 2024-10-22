import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { NotificationComponent } from "./notification/notification.component";
import { SocialComponent } from "./social/social.component";
import { SocialNetwork, UserData } from './data/interfaces';
import { data, socialNetworks } from './data/data';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UserComponent, NotificationComponent, SocialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  socialNetworks: SocialNetwork[] = Object.values(socialNetworks);
  users: UserData[] = Object.values(data);

  private notificationSubject = new Subject<{ platform: string, message: string }>();
  notifications$ = this.notificationSubject.asObservable();

  emitNotification(event: { platform: string, type: string }) {
    const { platform, type } = event;
    const message = `${platform} added a new ${type}`;
    this.notificationSubject.next({ platform, message });
  }
  

  getPlatformName(subscriptionId: number): string {
    const network = this.socialNetworks.find(n => n.id === subscriptionId);
    return network ? network.platform : 'Unknown platform';
  }
}
