import { CanActivateFn, Router } from '@angular/router';
import { Inject, inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('email')){
    return true
  }else{
    const router = inject(Router);
    return router.navigate(['login']);
  }
};