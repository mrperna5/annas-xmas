import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestandteileComponent } from './bestandteile.component';

describe('BestandteileComponent', () => {
  let component: BestandteileComponent;
  let fixture: ComponentFixture<BestandteileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestandteileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestandteileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
