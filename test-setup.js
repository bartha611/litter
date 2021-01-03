import { configure } from 'enzyme';
import lodash from 'lodash';

import 'regenerator-runtime';
import Adapter from 'enzyme-adapter-react-16';

global._ = lodash;

configure({ adapter: new Adapter() });
