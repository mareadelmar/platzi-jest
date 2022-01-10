import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Retornar initialState', () => {
    // le pasamos como initialState un objeto vacío y es lo que debe retornar (no le estamos pasando action)
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    // testeamos agregar algo al carrito
    const initialState = {
      cart: [],
    };

    const payload = ProductMock;

    const action = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expected = {
      cart: [ProductMock],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
