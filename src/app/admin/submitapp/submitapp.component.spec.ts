import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitappComponent } from './submitapp.component';

describe('SubmitappComponent', () => {
  let component: SubmitappComponent;
  let fixture: ComponentFixture<SubmitappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
