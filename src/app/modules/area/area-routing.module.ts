import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaListComponent } from './project/area-list/area-list.component';

const routes: Routes = [
    { path: 'area-list', component: AreaListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AreaRoutingModule { }
