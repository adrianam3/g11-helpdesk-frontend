import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoListComponent } from './project/departamento-list/departamento-list.component';
import { DepartamentoFormComponent } from './project/departamento-form/departamento-form.component';

const routes: Routes = [
    { path: 'departamento-list', component: DepartamentoListComponent },
    { path: 'departamento-form', component: DepartamentoFormComponent },
    { path: 'departamento-form/:codigo', component: DepartamentoFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartamentoRoutingModule { }
