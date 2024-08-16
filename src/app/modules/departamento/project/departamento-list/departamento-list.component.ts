import { Component } from '@angular/core';

@Component({
    selector: 'app-departamento-list',
    templateUrl: './departamento-list.component.html',
    styleUrl: './departamento-list.component.scss'
})
export class DepartamentoListComponent {
    public showSearch: boolean;
    public departamentosEjemplo: any = [];

    constructor() { }
    ngOnInit() {
        this.showSearch = false;
        this.departamentosEjemplo = [
            { idDepartamento: 1, nombre: 'Sistemas', descripcion: 'Departamento de Sistemas', estado: 'AC', descEstado: 'ACTIVO' },
            { idDepartamento: 2, nombre: 'Finanzas', descripcion: 'Departamento de Finanzas', estado: 'AC', descEstado: 'ACTIVO' },
            { idDepartamento: 3, nombre: 'Recursos Humanos', descripcion: 'Departamento de Recursos Humanos', estado: 'AC', descEstado: 'ACTIVO' },
            { idDepartamento: 4, nombre: 'Contabilidad', descripcion: 'Departamento de Contabilidad', estado: 'AC', descEstado: 'ACTIVO' },
        ]
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
