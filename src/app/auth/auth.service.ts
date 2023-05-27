import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";

Injectable()
export class AuthService {

    constructor() {

    }

    isLogedIn(): Observable<boolean> {
        return of(true).pipe(delay(500))
    }

    hasPermission (): Observable<boolean> {
        return of(false).pipe(delay(500))
    }

}