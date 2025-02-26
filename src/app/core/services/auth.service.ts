import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { PersistenceService } from './persistence.service';
import { Observable } from 'rxjs';
import { IAuthModel } from 'src/app/models/IAuth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ComponentStore<IAuthModel> {

  constructor(
    private persistence$: PersistenceService,
    private router$: Router
  ) {
    super({
      NombreUsuario: '',
      Contrasena: '',
      IdUsuario: '',

    });

    const isAuth = persistence$.get('auth') as IAuthModel;
    if (isAuth) {
      this.setAuth(isAuth);
    }
  }

  readonly setAuth = this.updater((state, payload: IAuthModel) => {
    const localAuth = {
      ...state,
      NombreUsuario: payload.NombreUsuario! ?? state.NombreUsuario,
      Contrasena: payload.Contrasena! ?? state.Contrasena,
      IdUsuario: payload.IdUsuario! ?? state.IdUsuario

    }
    this.persistence$.save('auth', localAuth);
    return localAuth;
  });
  readonly getId: Observable<number> = this.select((state) => state.IdUsuario);
  readonly setToken = (token: string) => {
    this.persistence$.save('tknIris', token);
  };


  getTokenWithoutObs(): string {
    const tkn = this.persistence$.get('tknIris');
    return tkn;
  }

 
}
