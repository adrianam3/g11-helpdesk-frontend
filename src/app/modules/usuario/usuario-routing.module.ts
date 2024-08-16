import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioListComponent } from './project/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './project/usuario-form/usuario-form.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'usuario-list', component: UsuarioListComponent },
    { path: 'usuario-form', component: UsuarioFormComponent },
    { path: 'usuario-form/:codigo', component: UsuarioFormComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }
