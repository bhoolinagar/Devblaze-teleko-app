import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guest-invetation',
  standalone: true,
  imports: [ FormsModule ,
    FormsModule,
    CommonModule
  ],
  templateUrl: './guest-invetation.component.html',
  styleUrl: './guest-invetation.component.css',
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
 // schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})


export class GuestInvetationComponent {

  guestProfile = {
    username: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("Guest Profile Submitted:", this.guestProfile);
  }

}
