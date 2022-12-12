import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goWelcome() {
    var audio = new Audio('./assets/audio/christmas-ident-21090.mp3')
    audio.play()
    this.router.navigate(['geheimnisse'])
  }

}