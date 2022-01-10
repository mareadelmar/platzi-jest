import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar una API y retornar datos', () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        data: '12345',
      })
    );

    getData('https://google.com').then(res => {
      expect(res.data).toEqual('12345');
    });

    // chequear que la llamada a google está siendo ejecutada
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
