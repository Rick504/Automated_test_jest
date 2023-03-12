const {
  sum,
  division,
  checkBoolean
} = require('./index');

// beforeAll(() => {console.log('antes de todos os testes')})
// afterAll(() => {console.log('depois de todos os testes')})

describe('Aqui temos os teste de matematica:', () => {
    // beforeEach(() => {console.log('antes de cada teste dentro desse describe')})
    // afterEach(() => {console.log('depois de cada teste dentro desse describe')})

    it('soma 1 + 2 para dar 3', () => {
      expect(sum(1, 2)).toBe(3);
    })

    it('soma 1 + 2 para dar 3', () => {
      expect(division(8, 4)).toBe(2);
    })
  }
)

describe('Aqui temos teste de boolean:',() => {
  it('verifica de um valor retorna true', () => {
    expect(checkBoolean(true)).toBe(true);
  })
})

//describe não são obrigatórios
