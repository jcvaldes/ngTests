import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  // mando null por ser una prueba unitaria y evito el error
  const servicio = new MedicosService(null);
  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init: Debe cargar los médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];
    // realiza una peticion falsa
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe de llamar al servidor para agregar un medico ', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
      return empty();
    });
    componente.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });

  it('Debe agregar un nuevo medico al arreglo de medicos', () => {
    const medico = { id: 1, nombre: 'Juan' };

    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));
    componente.agregarMedico();
    // expect(componente.medicos.length).toBe(1);
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agegar el medico';

    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));
    componente.agregarMedico();
    // expect(componente.medicos.length).toBe(1);
    expect(componente.mensajeError).toBe(miError);
  });
  it('', () => {
    const miError = 'No se pudo agegar el medico';

    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));
    componente.agregarMedico();
    // expect(componente.medicos.length).toBe(1);
    expect(componente.mensajeError).toBe(miError);
  });
  it('Debe de llamar al servidor para borrar un medico', () => {
    // simulo que el usuario presiono en SI
    spyOn(window, 'confirm').and.returnValue(true);

    const espia = spyOn(servicio, 'borrarMedico')
                        .and.returnValue(empty());

    componente.borrarMedico('1');
    // expect(componente.medicos.length).toBe(1);
    expect(espia).toHaveBeenCalledWith('1');
  });
  it('NO Debe de llamar al servidor para borrar un medico', () => {
    // simulo que el usuario presiono en NO
    spyOn(window, 'confirm').and.returnValue(false);

    const espia = spyOn(servicio, 'borrarMedico')
                        .and.returnValue(empty());

    componente.borrarMedico('1');
    // expect(componente.medicos.length).toBe(1);
    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
