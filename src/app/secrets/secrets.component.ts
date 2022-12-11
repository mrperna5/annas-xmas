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

  // getSecert2() {
  //   if (this.secretPassword2 === "b123") {
  //   this.secretMessage2 = 'Secret Message number two';
  //   this.invalidPassword2Msg = false
  //   } else {
  //     this.invalidPassword2Msg = true
  //   }
  // }

  // getSecert3() {
  //   if (this.secretPassword3 === "c123") {
  //   this.secretMessage3 = 'Secret Message number three';
  //   this.invalidPassword3Msg = false
  //   } else {
  //     this.invalidPassword3Msg = true
  //   }
  // }

  // getSecert4() {
  //   if (this.secretPassword4 === "d123") {
  //   this.secretMessage4 = 'Secret Message number four';
  //   this.invalidPassword4Msg = false
  //   } else {
  //     this.invalidPassword4Msg = true
  //   }
  // }

  // getSecert5() {
  //   if (this.secretPassword5 === "e123") {
  //   this.secretMessage5 = 'Secret Message number five';
  //   this.invalidPassword5Msg = false
  //   } else {
  //     this.invalidPassword5Msg = true
  //   }
  // }

  // getSecert6() {
  //   if (this.secretPassword6 === "f123") {
  //   this.secretMessage6 = 'Secret Message number six';
  //   this.invalidPassword6Msg = false
  //   } else {
  //     this.invalidPassword6Msg = true
  //   }
  // }

  // getSecert7() {
  //   if (this.secretPassword7 === "g123") {
  //   this.secretMessage7 = 'Secret Message number seven';
  //   this.invalidPassword7Msg = false
  //   } else {
  //     this.invalidPassword7Msg = true
  //   }
  // }

  // getSecert8() {
  //   if (this.secretPassword8 === "h123") {
  //   this.secretMessage8 = 'Secret Message number eight';
  //   this.invalidPassword8Msg = false
  //   } else {
  //     this.invalidPassword8Msg = true
  //   }
  // }

}