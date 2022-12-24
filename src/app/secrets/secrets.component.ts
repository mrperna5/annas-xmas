import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

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

  
  warningMessage = 'Code ist falsch'
  lossMessage = 'keine weiteren Versuche mehr!'


  constructor(
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  getSecert(secret: Secret,inputPass: string) {
    // console.log("clicked")
    inputPass = inputPass.toUpperCase()
    if (inputPass == secret.password) {
      this.router.navigate(['geheimeNachricht', secret.id])
      secret.validPassword = true
      secret.passwordCounter = 0
    } else {      
      secret.validPassword = false
      secret.passwordCounter++
    }

    if (secret.passwordCounter >= 3) {
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

  goBack(): void {
    this.location.back();
  }


}