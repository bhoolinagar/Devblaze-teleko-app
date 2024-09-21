import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { GuestInvetationComponent } from './guest-invetation/guest-invetation.component';
import { GuestProfileComponent } from './guest-profile/guest-profile.component';
import { PrimaryProfileComponent } from './primary-profile/primary-profile.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
{path:'' , redirectTo:'/guest-intvetation', pathMatch:"full"},
{path:'guest-intvetation',component: GuestInvetationComponent},
{path:'guest-profile', component:GuestProfileComponent},
{path:"primary-user", component:PrimaryProfileComponent},
{path:"card", component:CardComponent},
//{path:"", component:""}

];
