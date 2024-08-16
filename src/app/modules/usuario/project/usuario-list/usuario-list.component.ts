import { Component } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
    selector: 'app-usuario-list',
    templateUrl: './usuario-list.component.html',
    styleUrl: './usuario-list.component.scss'
})
export class UsuarioListComponent {
    public usuariosEjemplo: any = []
    public showSearch: boolean;

    constructor() { }

    ngOnInit(): void {
        this.usuariosEjemplo = new Array<Usuario>();
        this.showSearch = false;
        this.usuariosEjemplo = [
            { idUsuario: 1, usuario: 'USER1', nombreCompleto: 'Juan Pérez', descArea: 'Ventas', descRol: 'Agente', email: 'juan@example.com', fechaCreacion: '1/1/2024', fechaModificacion: '1/1/2024', descEstado: 'Inactivo', estado: 'IN' },
            { idUsuario: 2, usuario: 'USER2', nombreCompleto: 'María López', descArea: 'Ventas', descRol: 'Agente', email: 'maria@example.com', fechaCreacion: '1/1/2024', fechaModificacion: '1/1/2024', descEstado: 'Activo', estado: 'AC' },
            { idUsuario: 3, usuario: 'USER3', nombreCompleto: 'Carlos Sánchez', descArea: 'Soporte', descRol: 'Administrador', email: 'carlos@example.com', fechaCreacion: '1/1/2024', fechaModificacion: '1/1/2024', descEstado: 'Activo', estado: 'AC' },

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
