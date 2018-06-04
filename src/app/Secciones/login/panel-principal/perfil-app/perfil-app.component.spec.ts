import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAppComponent } from './perfil-app.component';

describe('PerfilAppComponent', () => {
  let component: PerfilAppComponent;
  let fixture: ComponentFixture<PerfilAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
