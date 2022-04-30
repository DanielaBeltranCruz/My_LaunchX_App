const MissionCommander = require('./../app/missionCommander')

describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander objet', () => {
        const myMissionCommander = new MissionCommander("Woopa")
        // Validar el resultado esperado
        expect(myMissionCommander.name).toBe("Woopa");
    });
})

/* describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
        const result = 8 + 2 
        expect(result).toBe(10);
    });
})*/
  
