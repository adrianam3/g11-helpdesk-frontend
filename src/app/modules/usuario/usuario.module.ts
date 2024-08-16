import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { UsuarioListComponent } from './project/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './project/usuario-form/usuario-form.component';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
    declarations: [
        LoginComponent,
        UsuarioListComponent,
        UsuarioFormComponent],
    imports: [
        CommonModule,
        UsuarioRoutingModule,
        FormsModule,
        PasswordModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        MessagesModule,
        TooltipModule,
        InputTextareaModule,
        ConfirmDialogModule,
        ToolbarModule,
        ToastModule,
        DropdownModule,
    ],
    providers: [
        ConfirmationService,
        MessageService,
    ],
})
export class UsuarioModule { }
