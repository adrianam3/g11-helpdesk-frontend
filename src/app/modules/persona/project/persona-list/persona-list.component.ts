import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona';

@Component({
    selector: 'app-persona-list',
    templateUrl: './persona-list.component.html',
    styleUrl: './persona-list.component.scss'
})
export class PersonaListComponent implements OnInit {
    public personas: any;
    public showSearch: boolean;
    public personasEjemplo: any = [];

    constructor() { }

    ngOnInit(): void {
        this.personas = new Array<Persona>();
        this.showSearch = false;
        this.personasEjemplo = [
            { idPersona: 1, cedula: '123456789', nombreCompleto: 'Juan Pérez', email: 'juan@example.com', direccion: 'Ibarra', celular: '23334322', telefono: '23423434', extension: '232', descEstado: 'Activo', estado: 'IN' },
            { idPersona: 2, cedula: '123456789', nombreCompleto: 'María García', email: 'maria@example.com', direccion: 'Ibarra', celular: '23334322', telefono: '23423434', extension: '232', descEstado: 'Activo', estado: 'IN' },
            { idPersona: 3, cedula: '123456789', nombreCompleto: 'Carlos López', email: 'carlos@example.com', direccion: 'Ibarra', celular: '23334322', telefono: '23423434', extension: '232', descEstado: 'Activo', estado: 'AC' },
            { idPersona: 4, cedula: '123456789', nombreCompleto: 'Ana Martínez', email: 'ana@example.com', direccion: 'Ibarra', celular: '23334322', telefono: '23423434', extension: '232', descEstado: 'Activo', estado: 'AC' },
            { idPersona: 5, cedula: '123456789', nombreCompleto: 'Luis Rodríguez', email: 'luis@example.com', direccion: 'Ibarra', celular: '23334322', telefono: '23423434', extension: '232', descEstado: 'Activo', estado: 'AC' }
        ];
    }

    public showFilter() {
        if (this.showSearch === false) {
            this.showSearch = true;
        } else {
            this.showSearch = false;
            // this.table.reset();
        }
    }
    public confirmDeshabilitar(rowData) {
        console.log('Deshabilitar');
    }

}
