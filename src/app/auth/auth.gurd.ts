import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, of, tap } from "rxjs";
import { AuthService } from "./auth.service";

export class AuthGurd implements CanActivate {

    constructor(
        private router: Router,

        private authServic: AuthService) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return this.authServic.isLogedIn().pipe(map(res => {
            console.log(res)
            if (res) return true;
            else {
                this.router.createUrlTree(['/login']);
                return false;
            }
        }))
    }
}