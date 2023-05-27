import { CanActivateFn } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs";


export const CanActivate: CanActivateFn = () => {

    const authService = inject(AuthService);
    const router = inject(Router);

    console.log('auth checking ....')

  return  authService.isLogedIn().pipe(map(isLogin=>{
        if(isLogin) return true
        else {
            return router.createUrlTree(['/login'])
        }
    }))


}


export const Permission : CanActivateFn = () => {

    const authService = inject(AuthService);
    const router = inject(Router);

    console.log('permission checking ....')

  return  authService.hasPermission().pipe(map(isLogin=>{
        if(isLogin) return true
        else {
            return router.createUrlTree(['admin'])
        }
    }))


}