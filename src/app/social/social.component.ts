import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SocialNetwork } from '../data/interfaces';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent {
  @Input() socialNetworks: SocialNetwork[] = [];
  @Output() addNotification = new EventEmitter<{ platform: string, type: string }>();

  onAddAction(network: SocialNetwork) {
    this.addNotification.emit({ platform: network.platform, type: network.type });
  }
}
