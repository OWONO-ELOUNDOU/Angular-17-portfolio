import { Component } from '@angular/core';

import { HeaderComponent } from '../../Components/header/header.component';
import { SocialLink, socialLinks } from '../../shared/models/social-link';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userLogo: string = 'assets/images/avatar/user-logo.jpeg';
  socials: SocialLink[] = socialLinks;
}
