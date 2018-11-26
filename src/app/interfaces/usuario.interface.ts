export interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
    direccion: string;
    email: string;
    clave: string;
    isEmpleado: boolean;
    isTutor: boolean;
    isAlumno: boolean;
    estado: boolean;
}