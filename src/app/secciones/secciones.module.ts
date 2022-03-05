import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { MyWorkComponent } from './pages/my-work/my-work.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SeccionesRoutingModule } from './secciones-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



 
@NgModule({
  declarations: [
    AboutMeComponent,
    SkillsComponent,
    MyWorkComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SeccionesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SeccionesModule { }
