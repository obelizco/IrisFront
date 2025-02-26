import { Injectable } from '@angular/core';
import { LoginRepository } from '../class/login.repository';
import { FormGroup } from '@angular/forms';
import { IAuthParams } from '../models/IAuthParams.interface';
import { IAuthUser } from '../models/IAuthUser.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MessageService } from 'primeng/api';
import { HttpService } from 'src/app/core/services/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends LoginRepository {
  public loginForm: FormGroup = this.new();

  constructor(private auth$: AuthService,
    private http$: HttpService,
    private messageService$: MessageService,
    public router$: Router,
  ) {
    super();
  }

  public login(): void {
    if (!this.loginForm?.valid) {
      this.messageService$.add({
        key: 'toastLogin',
        severity: 'error',
        summary: 'Error',
        detail: 'Verifique todos los campos.',
      });
      return;
    }

    const authData = this.loginForm.value as IAuthParams;

    this.http$.post<IAuthUser>('/Auth/login', authData).subscribe(
      (user: IAuthUser) => {
        this.loginSuccess(user);
      }

    );
  }

  private loginSuccess = (user: IAuthUser) => {
    const {userName,id,token} = user;
    const authData = this.loginForm.value as IAuthParams;
    
    this.auth$.setToken(token as string);
    this.auth$.setAuth({
      NombreUsuario: userName,
      Contrasena: authData.password,
      IdUsuario: user.id,
      Token: user.token
    });
    
    this.router$.navigate(['/task']);
    this.clean();
  };



  public clean(): void {
    this.loginForm = this.new();
  }
}
