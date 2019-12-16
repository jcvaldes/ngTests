import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

// Pruebas de integracion
describe('Medico Component', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MedicoComponent
      ],
      providers: [
        MedicoService
      ],
      imports: [
        HttpClientModule
      ]
    });
    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  });
  it('Debe de crearse el componente', () => {
    const nombre = 'Juan';
    const res = component.saludarMedico(nombre);
    expect(res).toContain(nombre);
  });
});
