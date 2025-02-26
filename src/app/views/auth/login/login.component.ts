import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `,
],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  valCheck: string[] = ['remember'];

  constructor(
      private service$: LoginService
  ) {
  }

  getForm() {
      return this.service$.loginForm;
  }

  public login(): void {
      this.service$.login();
  }
}
