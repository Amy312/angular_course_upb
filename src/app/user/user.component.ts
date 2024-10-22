import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SocialNetwork, UserData } from '../data/interfaces';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from "../notification/notification.component";
import { SocialComponent } from '../social/social.component';
import { Subscription } from 'rxjs';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, NotificationComponent, SocialComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, OnDestroy{
  @Input() user: UserData | undefined;
  @Input() socialNetworks: SocialNetwork[] = [];
  activeTab: 'user' | 'notifications' = 'user'; // Estado para controlar la pestaña activa
  isAccountClosed: boolean = false; // Nueva propiedad para controlar el estado


  userSubscriptions: SocialNetwork[] = [];
  availableSocialNetworks: SocialNetwork[] = [];
  private notificationSubscription: Subscription | undefined;

  constructor(private appComponent: AppComponent) {}

  ngOnInit() {
    this.updateSocialNetworks();
    this.subscribeToNotifications();
  }

  subscribeToNotifications() {
    this.notificationSubscription = this.appComponent.notifications$.subscribe(notification => {
      if (notification) {
        const { platform, message } = notification;
        const network = this.socialNetworks.find(n => n.platform === platform);
        const isSubscribed = this.userSubscriptions.some(n => n.platform === platform);
  
        if (isSubscribed) {
          if (this.user!.subscriptionType === 'premium') {
            this.user!.notifications.push(message);
  
            if (network && network.platformType === 'premium') {
              this.user!.amountAvailable -= 5;
            }
          } else if (this.user!.subscriptionType === 'free') {
            if (network && network.platformType === 'free') {
              this.user!.notifications.push(message);
            }
          }
        }
      }
    });
  }
  
  

  ngOnDestroy() {
    if (this.notificationSubscription) {
      this.notificationSubscription.unsubscribe();
    }
  }
  updateSocialNetworks() {
    this.userSubscriptions = this.socialNetworks.filter(network => 
      this.user!.subscriptions.includes(network.id)
    );
    this.availableSocialNetworks = this.socialNetworks.filter(network => 
      !this.user!.subscriptions.includes(network.id)
    );
  }
  

  addSubscription(networkId: number) {
    this.user!.subscriptions.push(networkId);
    this.updateSocialNetworks();
  }

  removeSubscription(networkId: number) {
    this.user!.subscriptions = this.user!.subscriptions.filter(id => id !== networkId);
    this.updateSocialNetworks(); 
  }

  setActiveTab(tab: 'user' | 'notifications') {
    this.activeTab = tab;
  }

  updateSubscription(newType: string) {
    this.user!.subscriptionType = newType;
  }

  closeAccount() {
    this.isAccountClosed = true;
  }
}
