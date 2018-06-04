import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiBlogComponent } from './notiBlog.component';

describe('NotiBlogComponent', () => {
  let component: NotiBlogComponent;
  let fixture: ComponentFixture<NotiBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
