import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bestandteile',
  templateUrl: './bestandteile.component.html',
  styleUrls: ['./bestandteile.component.css']
})
export class BestandteileComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
