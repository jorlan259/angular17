/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quotes */
import { MenusInterface } from "@interfaces/menus/menus";
import { MenusResponse } from "@model/menus/menus-response";

export class MenusMapper {

    static map(data: MenusResponse): MenusInterface {
        return {
            id: data.id,
            name: data.nombre_plato,
            description: data.descripcion_plato,
            id_category: data.id_categoria,
            price: data.precio_venta,
            production_cost: data.costo_produccion,
            ingredients: data.ingredientes,
            allergens: data.alergenos,
            picture: data.imagen_plato,
        };
    }
}