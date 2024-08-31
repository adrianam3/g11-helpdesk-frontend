import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRol } from '../Interfaces/iRol';

@Injectable({
    providedIn: 'root'
})
export class RolService {
    apiurl: string = '';

    constructor(private lector: HttpClient) { }

    buscar(texto: string): Observable<IRol> {
        const formData = new FormData();
        formData.append('texto', texto);
        return this.lector.post<IRol>(this.apiurl + 'uno', formData);
    }
    todos(): Observable<IRol[]> {
        return this.lector.get<IRol[]>(this.apiurl + 'todos');
    }
    uno(idRol: number): Observable<IRol> {
        const formData = new FormData();
        formData.append('idRol', idRol.toString());
        return this.lector.post<IRol>(this.apiurl + 'uno', formData);
    }
    eliminar(IRol: number): Observable<number> {
        const formData = new FormData();
        formData.append('IRol', IRol.toString());
        return this.lector.post<number>(this.apiurl + 'eliminar', formData);
    }
    insertar(rol: IRol): Observable<string> {
        const formData = new FormData();
        formData.append('Nombres', rol.nombreRol);
        // formData.append('Direccion', rol.Direccion);
        // formData.append('Telefono', rol.Telefono);
        // formData.append('Cedula', rol.Cedula);
        // formData.append('Correo', rol.Correo);
        return this.lector.post<string>(this.apiurl + 'insertar', formData);
    }
    actualizar(rol: IRol): Observable<string> {
        const formData = new FormData();
        formData.append('idRol', rol.idRol.toString());
        formData.append('nombreRol', rol.nombreRol);
        return this.lector.post<string>(this.apiurl + 'actualizar', formData);
    }
}
