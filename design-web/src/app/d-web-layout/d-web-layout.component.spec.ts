import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DWebLayoutComponent } from './d-web-layout.component';

describe('DWebLayoutComponent', () => {
  let component: DWebLayoutComponent;
  let fixture: ComponentFixture<DWebLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DWebLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DWebLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
