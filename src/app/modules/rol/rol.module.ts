import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { RolListComponent } from './project/rol-list/rol-list.component';
import { RolFormComponent } from './project/rol-form/rol-form.component';


@NgModule({
  declarations: [RolListComponent, RolFormComponent],
  imports: [
    CommonModule,
    RolRoutingModule
  ]
})
export class RolModule { }
