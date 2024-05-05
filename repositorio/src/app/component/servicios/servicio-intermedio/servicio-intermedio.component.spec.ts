import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioIntermedioComponent } from './servicio-intermedio.component';

describe('ServicioIntermedioComponent', () => {
  let component: ServicioIntermedioComponent;
  let fixture: ComponentFixture<ServicioIntermedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioIntermedioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicioIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
