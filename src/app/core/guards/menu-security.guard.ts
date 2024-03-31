import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { delay, of, tap } from 'rxjs';

export const menuSecurityGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
   const isAuthenticated = localStorage.getItem('CanAccessToMenu') === 'false';
  // const isAuthenticated =  true;

  return of(isAuthenticated).pipe(
    // delay(3000),
    tap((isAuthenticated) => {
      if (!isAuthenticated) {
        router.navigateByUrl('/login');
      }
    })
  );
};
