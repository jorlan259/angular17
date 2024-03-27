/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Ingrediente } from "@interfaces/menus/menus";

export class MenusResponse {
    id:                number;
    nombre_plato:      string;
    descripcion_plato: string;
    id_categoria:      number;
    precio_venta:      number;
    costo_produccion:  number;
    ingredientes:      Ingrediente[];
    alergenos:         string[];
    imagen_plato:      string;

    constructor(data: { [key: string]: unknown }) {
        this.id = data['id'] as number;
        this.nombre_plato = data['nombre_completo'] as string;
        this.descripcion_plato = data['telefono'] as string;
        this.id_categoria = data['id_categoria'] as number;
        this.precio_venta = data['precio_venta'] as number;
        this.costo_produccion = data['costo_produccion'] as number;
        this.ingredientes = data['ingredientes'] as Ingrediente[];
        this.alergenos = data['alergenos'] as string[];
        this.imagen_plato = data['imagen_plato'] as string;
    }
}