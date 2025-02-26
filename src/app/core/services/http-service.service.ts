import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environment';
import { AuthService } from './auth.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Validators } from 'src/app/utils/Validators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public params = new HttpParams();
  public basePatch: string = environment.API
  public headers$: HttpHeaders | undefined;
  private token: string | undefined;

  constructor(
    private _http: HttpClient,
    private readonly auth$: AuthService
  ) {
    
    this.init();
  }
  init(): void {
    this.token = this.auth$.getTokenWithoutObs();
    this.headers$ = this.httpOptions();
  }

  private httpOptions(): HttpHeaders {
    if (this.token) {
      return this.jsonAuth();
    }
    return this.notAuth();
  }

  private jsonAuth = (): HttpHeaders =>
    new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  private notAuth = () =>
    new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

  public get<T>(
    url: string,
    params?: HttpParams,
    endpoint?: string
  ): Observable<any> {
    let path$ = `${this.basePatch}${url}`;

    const headers = {
      headers: this.headers$,
      params,
    };

    if (!Validators.isNullOrUndefined<string>(endpoint)) {
      path$ = `${endpoint}${url}`;
    }

    return this._http.get(path$, headers).pipe(
      map((res) => {
        return res;
      }),
      // eslint-disable-next-line @typescript-eslint/unbound-method
      catchError(this.handleError)
    );
  }

  public post<T>(
    url: string,
    data?: any | FormData,
    endpoint?: string,
    responseType?: string
  ): Observable<any> {
    let path$ = `${this.basePatch}${url}`;

    const requestOptions: { [x: string]: string | any } = {
      headers: this.headers$,
      responseType: responseType ? responseType : null,
    };
    if (!Validators.isNullOrUndefined<string>(endpoint)) {
      path$ = `${endpoint}${url}`;
    }
    return this._http.post(path$, data, requestOptions).pipe(
      map((res) => {
        return res;
      }),
      // eslint-disable-next-line @typescript-eslint/unbound-method
      catchError(this.handleError)
    );
  }

  public put<T>(url: string, data: any, endpoint?: string): Observable<any> {
    let path$ = `${this.basePatch}${url}`;

    const headers = {
      headers: this.headers$,
    };

    if (!Validators.isNullOrUndefined<string>(endpoint)) {
      path$ = `${endpoint}${url}`;
    }
    return this._http.put(path$, data, headers).pipe(
      map((res) => {
        return res;
      }),
      // eslint-disable-next-line @typescript-eslint/unbound-method
      catchError(this.handleError)
    );
  }

  public delete<T>(url: string, endpoint?: string, data?: any): Observable<any> {
    let path$ = `${this.basePatch}${url}`;
    const headers = {
      headers: this.headers$,
      body: data
    };

    if (!Validators.isNullOrUndefined<string>(endpoint)) {
      path$ = `${endpoint}${url}`;
    }
    return this._http.delete(path$, headers).pipe(
      map((res) => {
        return res;
      }),
      // eslint-disable-next-line @typescript-eslint/unbound-method
      catchError(this.handleError)
    );
  }
  public handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    return throwError(error);
  }
}
