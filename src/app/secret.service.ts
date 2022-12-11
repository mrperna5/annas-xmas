import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SECRETS } from './mock-secrets';
import { Secret } from './secret';

@Injectable({
  providedIn: 'root'
})
export class SecretService {

  constructor() { }

  getSecrets(): Observable<Secret[]> {
    const secrets = of(SECRETS);    
    return secrets;
  }

  getSecret(id: number): Observable<Secret> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const secret = SECRETS.find(h => h.id === id)!;    
    return of(secret);
  }

}