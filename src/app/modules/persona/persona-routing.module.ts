import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaListComponent } from './project/persona-list/persona-list.component';
import { PersonaFormComponent } from './project/persona-form/persona-form.component';

const routes: Routes = [
  { path: 'persona-list', component: PersonaListComponent },
  { path: 'persona-form', component: PersonaFormComponent },
  { path: 'persona-form/:codigo', component: PersonaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
