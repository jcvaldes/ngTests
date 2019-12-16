import { mensaje } from './string';
// Agurpa las pruebas
describe('Pruebas de strings', () => {
  it('Debe de regresar un string', () => {
    const resp = mensaje('Juan Carlos');
    // expect( (typeof resp)  === 'string');
    // es lo mismo que
    expect(typeof resp).toBe('string');
  });
  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Juan';
    const resp = mensaje(nombre);
    // Esta es una prueba fragil
    // expect(resp).toBe('Saludos ' + nombre);
    expect(resp).toContain(nombre);
  });
});

