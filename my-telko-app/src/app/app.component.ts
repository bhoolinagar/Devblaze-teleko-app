import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuestProfileComponent } from './guest-profile/guest-profile.component';
import { GuestInvetationComponent } from './guest-invetation/guest-invetation.component';
import { PrimaryProfileComponent } from './primary-profile/primary-profile.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet,GuestProfileComponent,
    GuestInvetationComponent,
    
    PrimaryProfileComponent,CardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class AppComponent {
  title = 'my-telko-app';
}
