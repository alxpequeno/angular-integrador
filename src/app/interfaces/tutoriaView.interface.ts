import { Usuario } from "./usuario.interface";
import { Tutor } from "./tutor.interface";

export interface TutoriaView {
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
    tutor?: Tutor;
}