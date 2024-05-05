import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioAvanzadoComponent } from './servicio-avanzado.component';

describe('ServicioAvanzadoComponent', () => {
  let component: ServicioAvanzadoComponent;
  let fixture: ComponentFixture<ServicioAvanzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioAvanzadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicioAvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
