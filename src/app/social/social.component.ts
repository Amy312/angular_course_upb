import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SocialNetwork } from '../data/interfaces';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent {
  @Input() socialNetworks: SocialNetwork[] = [];

}
