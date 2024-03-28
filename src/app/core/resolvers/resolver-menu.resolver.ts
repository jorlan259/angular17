/* eslint-disable quotes */
import { inject } from "@angular/core";
import { MenusServices } from "@service/menus.service";
import { map } from "rxjs";
import { ResolveFn } from '@angular/router';

export const resolverMenuResolver: ResolveFn<boolean> = (route, state) => {
    const menuService = inject(MenusServices);
    return menuService.getAllMenus().pipe(
      // delay(3000),
      map(() => true)
    );
  };