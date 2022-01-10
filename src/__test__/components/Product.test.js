import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';
import ProductMock from '../../__mocks__/ProductMock';

describe('<Product />', () => {
  test('Render component Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );

    expect(product.length).toEqual(1);
  });

  // test para simular un click
  test('Comprobar el botón de comprar', () => {
    // simula una función sin llamar a la función real
    const handleAddToCart = jest.fn();

    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );

    wrapper.find('button').simulate('click');
    // chequea que se llame una vez
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
