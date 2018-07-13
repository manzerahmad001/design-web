import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DWebLoginComponent } from './d-web-login.component';

describe('DWebLoginComponent', () => {
  let component: DWebLoginComponent;
  let fixture: ComponentFixture<DWebLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DWebLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DWebLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
