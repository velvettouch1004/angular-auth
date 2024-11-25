import { Injectable, SimpleChange } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Authservice {
  private backendUrl: string = 'http://localhost:5000';
  constructor() {
    console.log('Auth service is working');
    
  }
  SigninSubmit(email: string, password: string) {
    
  }
}
