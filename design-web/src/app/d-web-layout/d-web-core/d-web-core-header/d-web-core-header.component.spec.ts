import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwebCoreHeaderComponent } from './d-web-core-header.component';

describe('DwebCoreHeaderComponent', () => {
  let component: DwebCoreHeaderComponent;
  let fixture: ComponentFixture<DwebCoreHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwebCoreHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwebCoreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
