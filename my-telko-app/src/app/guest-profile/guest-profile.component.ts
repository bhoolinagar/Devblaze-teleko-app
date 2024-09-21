import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guest-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guest-profile.component.html',
  styleUrl: './guest-profile.component.css'
})
export class GuestProfileComponent {
  guest = {
    mobile: '',
    address: '',
    pincode: '',
    email: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Guest Profile Submitted:', this.guest);
      // Add additional logic here, such as sending the form data to a server.
    } else {
      console.log('Form is invalid');
    }
  }

}
