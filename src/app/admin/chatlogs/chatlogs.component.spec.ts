import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatlogsComponent } from './chatlogs.component';

describe('ChatlogsComponent', () => {
  let component: ChatlogsComponent;
  let fixture: ComponentFixture<ChatlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
