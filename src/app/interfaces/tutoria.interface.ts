export interface Tutoria {
    idTutoria?: number;
    tituloTutoria: string;
    categoriaTutoria: string;
    Foto: string;
    fechaTutoria: string;
    horaTutoria: string;
    ubicacionTutoria: string;
    precioTutoria: number;
    descripcionTutoria: string;
    estadoTutoria?: boolean;
    cantidadAlumnos?: number;
    cantidadMaxima?: number;
    idTutor?: number;
}