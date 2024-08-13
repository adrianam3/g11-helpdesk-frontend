import { Component } from '@angular/core';
import { Persona } from '../model/persona';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-persona-form',
    templateUrl: './persona-form.component.html',
    styleUrl: './persona-form.component.scss'
})
export class PersonaFormComponent {
    public personaForm: FormGroup;
    public persona: Persona;
    public isEdicion: boolean;
    public bloquearEdicion: boolean;
    public estados: any;
    private idPersona: number;

    constructor(
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.persona = new Persona();
        this.isEdicion = false;
        this.bloquearEdicion = false;
        this.personaForm = this.fb.group({
            cedula: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            direccion: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            celular: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
        });
    }

    public confirmVolver() {
        this.confirmationService.confirm({
            key: 'persona',
            header: 'Cancelar',
            message: '¿Está seguro de cancelar la edición de la persona?',
            accept: () => {
                this.router.navigate(['/persona/persona-list']);
            },
            reject: () => {
            }
        });
    }

    public confirmReactivar() {
        this.confirmationService.confirm({
            key: 'persona',
            header: 'Reactivar',
            message: '¿Está seguro de Reactivar a la Persona',
            accept: () => {

            },
            reject: () => {
            }
        });
    }

    public onSubmit() {
        if (this.personaForm.valid) {
            console.log(this.personaForm.value);
            // Aquí puedes manejar el envío del formulario
        } else {
            // Marcar todos los campos como tocados para mostrar los errores
            Object.values(this.personaForm.controls).forEach(control => {
                control.markAsTouched();
            });
        }
    }

    private getPersona() {
        this.activatedRoute.params.subscribe(params => {
            this.idPersona = params['codigo'];
            if (this.idPersona === null || this.idPersona === undefined) {
                this.isEdicion = false;
            }
        });
        this.loadPersona();
    }

    private loadPersona() {
        if (this.idPersona !== null && this.idPersona !== undefined) {
            this.getPersonaByCodigo(this.idPersona);
        } else {
            this.isEdicion = false;
            this.persona = new Persona();
        }
    }

    private getPersonaByCodigo(codigo) {
    }

    private getEstado(codigoEstado: any) {
        const estado = this.estados.find(x => x.codigo === codigoEstado);
        return estado != null ? estado.significado : '--';
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
            summary, key: 'persona', sticky: false, severity, detail, life: time
        });
    }


}
