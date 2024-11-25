import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})

export class SignupComponent {
  username = '';
  email = '';
  password = '';
  onSubmit(): void {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
