import { obtenerRobots } from './arreglos';

// Agurpa las pruebas
describe('Pruebas de arreglos', () => {
  it('Debe retornar al menos 3 robots', () => {
    const resp = obtenerRobots();
    // prueba delicada porque puedo agregar un nuevo robot y fallaria
    // expect(resp.length).toBe(3);
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });
  it('Debe Debe de existir Megaman y Ultron', () => {
    const resp = obtenerRobots();
    // prueba delicada porque puedo agregar un nuevo robot y fallaria
    expect(resp).toContain('Megaman');
    expect(resp).toContain('Ultron');
  });
});

