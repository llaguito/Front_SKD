import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiBlogAppComponent } from './noti-blog-app.component';

describe('NotiBlogAppComponent', () => {
  let component: NotiBlogAppComponent;
  let fixture: ComponentFixture<NotiBlogAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiBlogAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiBlogAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
