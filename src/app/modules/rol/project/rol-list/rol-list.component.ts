import { Component } from '@angular/core';

@Component({
    selector: 'app-rol-list',
    templateUrl: './rol-list.component.html',
    styleUrl: './rol-list.component.scss'
})
export class RolListComponent {
    public showSearch: boolean;
    public rolesEjemplo: any = [];

    constructor() { }
    ngOnInit() {
        this.showSearch = false;
        this.rolesEjemplo = [
            { idRol: 1, nombreRol: 'Administrador', descEstado: 'Activo', estado: 'AC' },
            { idRol: 2, nombreRol: 'Usuario', descEstado: 'Activo', estado: 'AC' },
            { idRol: 3, nombreRol: 'Invitado', descEstado: 'Activo', estado: 'AC' }
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
