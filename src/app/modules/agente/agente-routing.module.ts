import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenteListComponent } from './project/agente-list/agente-list.component';
import { AgenteFormComponent } from './project/agente-form/agente-form.component';

const routes: Routes = [
    { path: 'agente-list', component: AgenteListComponent },
    { path: 'agente-form', component: AgenteFormComponent },
    { path: 'agente-form/:codigo', component: AgenteFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgenteRoutingModule { }
