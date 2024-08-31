import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RolService } from 'src/app/modules/Services/rol.service';

@Component({
    selector: 'app-rol-list',
    templateUrl: './rol-list.component.html',
    styleUrl: './rol-list.component.scss'
})
export class RolListComponent {
    public showSearch: boolean;
    public roles: any = [];

    constructor(private rolServicio: RolService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.showSearch = false;
        this.cargarTabla();
        this.roles = [
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

    public eliminar(idRol) {
        this.confirmationService.confirm({
            key: 'persona',
            header: 'Eliminar',
            message: '¿Está seguro de eliminar el Rol?',
            accept: () => {
                this.rolServicio.eliminar(idRol).subscribe((data) => {
                    this.cargarTabla();
                })
            },
            reject: () => {
            }
        });
    }

    public confirmDeshabilitar(rowData) {
        console.log('Deshabilitar');
    }

    private cargarTabla() {
        this.rolServicio.todos().subscribe(
            (data) => {
                this.roles = data;
            }
        );
    }
}
