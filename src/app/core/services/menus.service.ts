/* eslint-disable max-len */
/* eslint-disable quotes */
import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../../environments/environment";
import { MenusInterface } from "@interfaces/menus/menus";
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { MenusResponse } from "@model/menus/menus-response";
import { MenusMapper } from "@mapper/menus/menus-mapper";
import { menu } from "../const-data/menu";

type BaseResponse = {
    [key: string]: unknown;
};

@Injectable()
export class MenusServices {
    private httpClient = inject(HttpClient);

    private allMenusSubject: BehaviorSubject<MenusInterface[]> = new BehaviorSubject<MenusInterface[]>([]);
    allMenus$: Observable<MenusInterface[]> = this.allMenusSubject.asObservable();

    apiUrl = environment.apiUrl;


    getMenus(): MenusInterface[] {
        const menusResponse: MenusResponse[] = menu.map((menu) => new MenusResponse(menu));
        const finalResponse: MenusInterface[] = menusResponse.map((menu) => MenusMapper.map(menu));
        return finalResponse;
    }

    getAllMenus(): Observable<MenusInterface[]> {

        return this.httpClient.get<BaseResponse[]>(this.apiUrl + '/menu')
            .pipe(
                // delay(5000),
                map((response: BaseResponse[]) => response.map((menu) => new MenusResponse(menu))),
                map((response: MenusResponse[]) => response.map((menu) => MenusMapper.map(menu))),
                map((response) => response.map((menus) => ({ ...menus, name: menus.name  }))),
                tap((response) => this.allMenusSubject.next(response))
            );
    }

    postNewMenu(bodyRequest: MenusInterface): Observable<boolean> {

        return this.httpClient.post(this.apiUrl + '/menu', MenusMapper.toJson(bodyRequest))
            .pipe(
                tap((response) => console.log(response)),
                map(() => {
                    this.getAllMenus().subscribe();
                    return true;
                })
            );
    }
}
