import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersona } from '../Interfaces/iPersona';

@Injectable({
    providedIn: 'root'
})
export class PersonaService {
    apiurl: string = '';

    constructor(private lector: HttpClient) { }
    buscar(texto: string): Observable<IPersona> {
        const formData = new FormData();
        formData.append('texto', texto);
        return this.lector.post<IPersona>(this.apiurl + 'uno', formData);
    }
    todos(): Observable<IPersona[]> {
        return this.lector.get<IPersona[]>(this.apiurl + 'todos');
    }
    uno(idPersona: number): Observable<IPersona> {
        const formData = new FormData();
        formData.append('idPersona', idPersona.toString());
        return this.lector.post<IPersona>(this.apiurl + 'uno', formData);
    }
    eliminar(IPersona: number): Observable<number> {
        const formData = new FormData();
        formData.append('IPersona', IPersona.toString());
        return this.lector.post<number>(this.apiurl + 'eliminar', formData);
    }
    insertar(persona: IPersona): Observable<string> {
        const formData = new FormData();
        formData.append('persona', persona.cedula);
        formData.append('persona', persona.nombres);
        formData.append('persona', persona.apellidos);
        formData.append('persona', persona.celular);
        formData.append('persona', persona.telefono);
        formData.append('persona', persona.extension);
        formData.append('persona', persona.email);
        formData.append('persona', persona.direccion);
        formData.append('persona', persona.fechaCreacion.toString());
        return this.lector.post<string>(this.apiurl + 'insertar', formData);
    }
    actualizar(persona: IPersona): Observable<string> {
        const formData = new FormData();
        formData.append('idPersona', persona.idPersona.toString());
        formData.append('persona', persona.cedula);
        formData.append('persona', persona.nombres);
        formData.append('persona', persona.apellidos);
        formData.append('persona', persona.celular);
        formData.append('persona', persona.telefono);
        formData.append('persona', persona.extension);
        formData.append('persona', persona.email);
        formData.append('persona', persona.direccion);
        return this.lector.post<string>(this.apiurl + 'actualizar', formData);
    }
}
