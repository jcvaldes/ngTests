import { usuarioIngresado } from './booleanos';
describe('Pruebas de booleandos', () => {
  it('Debe retornar true', () => {
    const resp = usuarioIngresado();
    expect(resp).toBeTruthy();
    // expect(resp).toBeFalsy();
    expect(resp).not.toBeFalsy();
  });

});

