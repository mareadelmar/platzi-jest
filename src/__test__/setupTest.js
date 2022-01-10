import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// configuración: le pasamos el adapter
configure({ adapter: new Adapter() });

// capturar las peticiones: en vez de fetch, que utilice este paquete
global.fetch = require('jest-fetch-mock');
