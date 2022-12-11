import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SecretService } from '../secret.service';
import { Secret } from '../secret';

@Component({
  selector: 'app-secret-message',
  templateUrl: './secret-message.component.html',
  styleUrls: ['./secret-message.component.css']
})
export class SecretMessageComponent implements OnInit {

  @Input() secret?: Secret;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private secretService: SecretService,
  ) { }

  ngOnInit(): void {
    this.getSecret();
  }

  getSecret(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.secretService.getSecret(id)
      .subscribe(secret => this.secret = secret);
  }

  goBack(): void {
    this.location.back();
  }

}