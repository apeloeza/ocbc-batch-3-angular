import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse }

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  endpoint: string = 'http://localhost:5001/api'
  constructor ( private http: HttpClient) {}

  // Signup
  signUp(user: User): Observable<any> {
    let api = `this `
  }

  constructor() { }
}
