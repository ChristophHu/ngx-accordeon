import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAccordeonComponent } from './ngx-accordeon.component';

describe('NgxAccordeonComponent', () => {
  let component: NgxAccordeonComponent;
  let fixture: ComponentFixture<NgxAccordeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxAccordeonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxAccordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
