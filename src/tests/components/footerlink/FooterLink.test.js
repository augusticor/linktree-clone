import { shallow } from 'enzyme';
import FooterLink from '../../../components/footerlink/FooterLink';

describe('Tests on <FooterLink /> component', () => {
	const wrapper = shallow(<FooterLink />);

	test('Should match snapshot', () => expect(wrapper).toMatchSnapshot());

	test('Should find an svg', () => {
		expect(wrapper.find('svg').exists()).toBeTruthy();
		expect(wrapper.find('svg').length).toBe(1);
	});
});
