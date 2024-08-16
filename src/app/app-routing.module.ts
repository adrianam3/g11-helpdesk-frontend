import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { LoginComponent } from './modules/usuario/login/login.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
                    {
                        path: 'usuario', loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule)
                    },
                    {
                        path: 'persona', loadChildren: () => import('./modules/persona/persona.module').then(m => m.PersonaModule)
                    },
                    {
                        path: 'rol', loadChildren: () => import('./modules/rol/rol.module').then(m => m.RolModule)
                    },
                    {
                        path: 'departamento', loadChildren: () => import('./modules/departamento/departamento.module').then(m => m.DepartamentoModule)
                    },
                    {
                        path: 'area', loadChildren: () => import('./modules/area/area.module').then(m => m.AreaModule)
                    },
                    {
                        path: 'agente', loadChildren: () => import('./modules/agente/agente.module').then(m => m.AgenteModule)
                    },
                    {
                        path: 'ticket', loadChildren: () => import('./modules/ticket/ticket.module').then(m => m.TicketModule)
                    },
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
