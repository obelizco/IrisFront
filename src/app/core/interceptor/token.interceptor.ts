import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private auth$: AuthService) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        const token = this.auth$.getTokenWithoutObs();

        // Si hay un token, lo agregamos a la solicitud
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }

        return next.handle(request).pipe(
            tap((event) => {
                if (event instanceof HttpResponse) {
                    const newToken = event.headers.get('authorization');
                    if (newToken) {
                        this.auth$.setToken(newToken);
                    }
                }
            })
        );
    }
}