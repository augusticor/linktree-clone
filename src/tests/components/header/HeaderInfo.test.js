import { shallow } from 'enzyme';

import HeaderInfo from '../../../components/header/HeaderInfo';

describe('Tests on <HeaderInfo /> component', () => {
	test('Should match snapshot', () => {
		const wrapper = shallow(<HeaderInfo />);

		expect(wrapper).toMatchSnapshot();
	});
});
