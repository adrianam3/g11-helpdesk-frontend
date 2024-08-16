import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../model/Usuario';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-usuario-form',
    templateUrl: './usuario-form.component.html',
    styleUrl: './usuario-form.component.scss'
})
export class UsuarioFormComponent {
    public usuarioForm: FormGroup;
    public usuario: Usuario;
    public isEdicion: boolean;
    public bloquearEdicion: boolean;
    public estados: any;
    public personas: any = [];
    public roles: any = [];
    public areas: any = [];
    private idUsuario: number;


    constructor(
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.usuario = new Usuario();
        this.isEdicion = false;
        this.bloquearEdicion = false;
        this.personas = [
            { idPersona: 1, cedula: '123456789', nombreCompleto: 'Juan Pérez', email: 'juan@example.com', direccion: 'Ibarra', celular: '23334322', telefono: '23423434', extension: '232', descEstado: 'Activo', estado: 'IN' },
            { idPersona: 2, cedula: '123456789', nombreCompleto: 'María García', email: 'maria@example.com', direccion: 'Ibarra', celular: '23334322', telefono: '23423434', extension: '232', descEstado: 'Activo', estado: 'IN' },
            { idPersona: 3, cedula: '123456789', nombreCompleto: 'Carlos López', email: 'carlos@example.com', direccion: 'Ibarra', celular: '23334322', telefono: '23423434', extension: '232', descEstado: 'Activo', estado: 'AC' },
            { idPersona: 4, cedula: '123456789', nombreCompleto: 'Ana Martínez', email: 'ana@example.com', direccion: 'Ibarra', celular: '23334322', telefono: '23423434', extension: '232', descEstado: 'Activo', estado: 'AC' },
            { idPersona: 5, cedula: '123456789', nombreCompleto: 'Luis Rodríguez', email: 'luis@example.com', direccion: 'Ibarra', celular: '23334322', telefono: '23423434', extension: '232', descEstado: 'Activo', estado: 'AC' }
        ];
        this.roles = [
            { idRol: 1, nombre: 'Administrador' },
            { idRol: 2, nombre: 'Agente' },
            { idRol: 3, nombre: 'Usuario final' }
        ];
        this.areas = [
            { idArea: 1, nombre: 'Soporte' },
            { idArea: 2, nombre: 'Ventas' },
            { idArea: 3, nombre: 'Administración' }
        ];

        this.usuarioForm = this.fb.group({
            usuario: ['', [Validators.required]],
            persona: ['', Validators.required],
            rol: ['', Validators.required],
            area: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    public confirmVolver() {
        this.confirmationService.confirm({
            key: 'usuario',
            header: 'Cancelar',
            message: '¿Está seguro de cancelar la edición del usuario?',
            accept: () => {
                this.router.navigate(['/usuario/usuario-list']);
            },
            reject: () => {
            }
        });
    }

    public confirmReactivar() {
        this.confirmationService.confirm({
            key: 'usuario',
            header: 'Reactivar',
            message: '¿Está seguro de Reactivar al Usuario',
            accept: () => {

            },
            reject: () => {
            }
        });
    }

    public onSubmit() {
        if (this.usuarioForm.valid) {
            console.log(this.usuarioForm.value);
            // Aquí puedes manejar el envío del formulario
        } else {
            // Marcar todos los campos como tocados para mostrar los errores
            Object.values(this.usuarioForm.controls).forEach(control => {
                control.markAsTouched();
            });
        }
    }

    private showToast(detail: string, severity: string) {
        let summary;
        let time;
        if (severity === 'success') {
            time = 10000;
            summary = '¡Correcto!';
        } else if (severity === 'warn') {
            time = 20000;
            summary = '¡Advertencia!';
        } else if (severity === 'error') {
            time = 20000;
            summary = '¡Error!';
        }
        this.messageService.add({
            summary, key: 'usuario', sticky: false, severity, detail, life: time
        });
    }
}
