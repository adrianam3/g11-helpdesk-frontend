export interface IUsuario {
    idUsuario: number;
    usuario: string;
    password: string;
    descripcion: string;
    idPersona: number;
    idAreaU: number;
    idRol: number;
    idcargoU: number;
    estado: number;
    fechaCreacion: Date;
}
