import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwebCoreFooterComponent } from './d-web-core-footer.component';

describe('DwebCoreFooterComponent', () => {
  let component: DwebCoreFooterComponent;
  let fixture: ComponentFixture<DwebCoreFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwebCoreFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwebCoreFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
