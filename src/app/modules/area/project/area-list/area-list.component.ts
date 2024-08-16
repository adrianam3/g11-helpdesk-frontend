import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-area-list',
    templateUrl: './area-list.component.html',
    styleUrl: './area-list.component.scss'
})
export class AreaListComponent {
    public showSearch: boolean;
    public areasEjemplo: any = [];

    constructor() { }
    ngOnInit() {
        this.showSearch = false;
        this.areasEjemplo = [
            { idArea: 1, nombreArea: 'Área 1', descripcion: 'Descripción 1', estado: 'AC', descEstado: 'ACTIVO' },
            { idArea: 2, nombreArea: 'Área 2', descripcion: 'Descripción 2', estado: 'AC', descEstado: 'ACTIVO' },
            { idArea: 3, nombreArea: 'Área 3', descripcion: 'Descripción 3', estado: 'AC', descEstado: 'ACTIVO' },
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
