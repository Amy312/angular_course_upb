import { Component, Input, OnInit } from '@angular/core';
import { SocialNetwork, UserData } from '../data/interfaces';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from "../notification/notification.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, NotificationComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  @Input() user: UserData | undefined;
  @Input() socialNetworks: SocialNetwork[] = [];
  activeTab: 'user' | 'notifications' = 'user'; // Estado para controlar la pestaña activa

  userSubscriptions: SocialNetwork[] = [];
  availableSocialNetworks: SocialNetwork[] = [];

  ngOnInit() {
    this.updateSocialNetworks();
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
    this.updateSocialNetworks(); // Actualizamos las listas para reflejar el cambio
  }

  removeSubscription(networkId: number) {
    this.user!.subscriptions = this.user!.subscriptions.filter(id => id !== networkId);
    this.updateSocialNetworks(); // Actualizamos las listas para reflejar el cambio
  }

  setActiveTab(tab: 'user' | 'notifications') {
    this.activeTab = tab;
  }

  updateSubscription(newType: string) {
    this.user!.subscriptionType = newType;
  }
}
