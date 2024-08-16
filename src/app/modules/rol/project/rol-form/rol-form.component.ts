import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rol } from '../model/rol';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-rol-form',
    templateUrl: './rol-form.component.html',
    styleUrl: './rol-form.component.scss'
})
export class RolFormComponent {
    public rolForm: FormGroup;
    public rol: Rol;
    public isEdicion: boolean;
    public bloquearEdicion: boolean;
    public estados: any;
    private idRol: number;

    constructor(
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.rol = new Rol();
        this.isEdicion = false;
        this.bloquearEdicion = false;
        this.rolForm = this.fb.group({
            nombreRol: ['', [Validators.required]],
        });
    }

    public confirmVolver() {
        this.confirmationService.confirm({
            key: 'rol',
            header: 'Cancelar',
            message: '¿Está seguro de cancelar la edición del Rol?',
            accept: () => {
                this.router.navigate(['/rol/rol-list']);
            },
            reject: () => {
            }
        });
    }

    public confirmReactivar() {
        this.confirmationService.confirm({
            key: 'rol',
            header: 'Reactivar',
            message: '¿Está seguro de Reactivar el Rol',
            accept: () => {

            },
            reject: () => {
            }
        });
    }

    public onSubmit() {
        if (this.rolForm.valid) {
            console.log(this.rolForm.value);

        } else {

            Object.values(this.rolForm.controls).forEach(control => {
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
            summary, key: 'rol', sticky: false, severity, detail, life: time
        });
    }


}

