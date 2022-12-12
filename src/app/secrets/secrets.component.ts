import { Component, Input, OnInit } from '@angular/core';

import { Secret } from '../secret'
import { SECRETS } from '../mock-secrets'
import { Router } from '@angular/router';


@Component({
  selector: 'app-secrets',
  templateUrl: './secrets.component.html',
  styleUrls: ['./secrets.component.css']
})
export class SecretsComponent implements OnInit {

  secrets = SECRETS;

  errorMessage = 'Secret is not correct'


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getSecert(secret: Secret,inputPass: string) {
    if (inputPass == secret.password) {
      this.router.navigate(['geheimeNachricht', secret.id])
      secret.validPassword = true;
    } else {
      secret.validPassword = false;
    }
  }

  

  // getSecert1() {
  //   if (this.secretPassword1 === "a123") {
  //   this.secretMessage1 = 'Secret Message number one';
  //   this.invalidPassword1Msg = false
  //   } else {
  //     this.invalidPassword1Msg = true
  //   }
  // }

}