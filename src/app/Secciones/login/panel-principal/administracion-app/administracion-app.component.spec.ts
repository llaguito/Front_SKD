import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionAppComponent } from './administracion-app.component';

describe('AdministracionAppComponent', () => {
  let component: AdministracionAppComponent;
  let fixture: ComponentFixture<AdministracionAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
