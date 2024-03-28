/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quotes */
import {  MenusInterface } from "@interfaces/menus/menus";
import {  MenusResponse } from "@model/menus/menus-response";

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
    static toJson(data: MenusInterface): MenusResponse {
        return {
            id: data.id,
            nombre_plato: data.name,
            descripcion_plato : data.description,
            id_categoria : data.id_category,
            precio_venta : data.price,
            costo_produccion : data.production_cost,
            ingredientes : data.ingredients,
            alergenos : data.allergens,
            imagen_plato : data.picture
        };
    }
}
