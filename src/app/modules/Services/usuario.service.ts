import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../Interfaces/iUsuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    apiurl: string = '';

    constructor(private lector: HttpClient) { }
    buscar(texto: string): Observable<IUsuario> {
        const formData = new FormData();
        formData.append('texto', texto);
        return this.lector.post<IUsuario>(this.apiurl + 'uno', formData);
    }
    todos(): Observable<IUsuario[]> {
        return this.lector.get<IUsuario[]>(this.apiurl + 'todos');
    }
    uno(idUsuario: number): Observable<IUsuario> {
        const formData = new FormData();
        formData.append('idUsuario', idUsuario.toString());
        return this.lector.post<IUsuario>(this.apiurl + 'uno', formData);
    }
    eliminar(IUsuario: number): Observable<number> {
        const formData = new FormData();
        formData.append('IUsuario', IUsuario.toString());
        return this.lector.post<number>(this.apiurl + 'eliminar', formData);
    }
    insertar(usuario: IUsuario): Observable<string> {
        const formData = new FormData();
        formData.append('usuario', usuario.usuario);
        // formData.append('Direccion', usuario.Direccion);
        // formData.append('Telefono', usuario.Telefono);
        // formData.append('Cedula', usuario.Cedula);
        // formData.append('Correo', usuario.Correo);
        return this.lector.post<string>(this.apiurl + 'insertar', formData);
    }
    actualizar(usuario: IUsuario): Observable<string> {
        const formData = new FormData();
        formData.append('idUsuario', usuario.idUsuario.toString());
        formData.append('usuario', usuario.usuario);
        return this.lector.post<string>(this.apiurl + 'actualizar', formData);
    }
}
