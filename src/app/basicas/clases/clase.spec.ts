import { Jugador } from '../clases/clase';
describe('Pruebas de clase', () => {
  // const jugador = new Jugador();
  let jugador: Jugador;
  // ciclos de vida de las pruebas
  // beforeAll()
  // beforeEach()
  // afterAll()
  // afterEach()
  beforeEach(() => {
    // antes de cada prueba se instancia para que no genere error de la segunda prueba
    jugador = new Jugador();
  });

  it('Debe retornar 80 de hp, si recibe 20 de daño', () => {
    // instanciacion duplicadas en pruebas
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
  });
  it('Debe retornar 50 de hp, si recibe 50 de daño', () => {
    // instanciacion duplicadas en pruebas
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(50);
    expect(resp).toBe(50);
  });

  xit('Debe retornar 0 de hp, si recibe un daño mayor a 100', () => {
    const resp = jugador.recibeDanio(101);
    expect(resp).toBe(0);
  });
});
