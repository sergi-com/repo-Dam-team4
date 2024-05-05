import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioBasicoComponent } from './servicio-basico.component';

describe('ServicioBasicoComponent', () => {
  let component: ServicioBasicoComponent;
  let fixture: ComponentFixture<ServicioBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioBasicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicioBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
