import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface LoginData {
  email: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  loginData: LoginData = {
    email: '',
    senha: '',
  };

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    console.log('Dados do login:', { ...this.loginData });
  }
}
