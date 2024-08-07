import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrl: './persona-list.component.scss'
})
export class PersonaListComponent implements OnInit {
  public personas: any;
  public estados: any;
  public columns: any[];
  public showSearch: boolean;

  ngOnInit(): void {
    this.personas = new Array<Persona>();
    this.showSearch = false;
    this.setColumns();
  }

  private setColumns() {
    this.columns = [
      { field: 'apellidos', header: 'APELLIDOS', width: '150px' },
      { field: 'nombres', header: 'NOMBRES', width: '150px' },
      { field: 'email', header: 'E-MAIL', width: '150px' },
      { field: 'numeroCelular', header: 'CELULAR', width: '150px' },
      { field: 'telefono', header: 'TELEFONO', width: '150px' },
      { field: 'extensionTelefono', header: 'EXTENSION', width: '150px' },
      { field: 'direccion', header: 'DIRECCION', width: '150px' },
      { field: 'estado', header: 'ESTADO', width: '120px' }
    ];
  }
}
