import { incrementar } from './numeros';

describe('Pruebas de numeros', () => {
  it('Debe de retornar 100, si el numero ingresado es mayor a 100', () => {
    const resp = incrementar(100);
    expect(resp).toBe(100);
  });
  it('Debe de retornar el numero + 1, si no es mayor a 100', () => {
    const resp = incrementar(50);
    expect(resp).toBe(51);
  });

});

