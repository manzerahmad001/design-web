import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwebCoreNotfoundComponent } from './d-web-core-notfound.component';

describe('DwebCoreNotfoundComponent', () => {
  let component: DwebCoreNotfoundComponent;
  let fixture: ComponentFixture<DwebCoreNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwebCoreNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwebCoreNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
