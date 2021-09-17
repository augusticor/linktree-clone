import { shallow } from 'enzyme';

import LinksGrid from '../../../components/main/LinksGrid';
import { linksInfo } from '../../../data/links-data';

describe('Tests on <LinksGrid/> component', () => {
	const wrapper = shallow(<LinksGrid />);

	test('Should match snapshot', () => expect(wrapper).toMatchSnapshot());

	test('Should render the same amount of elements in linksinfo array', () => {
		expect(wrapper.find('LinkItem').length).toBe(linksInfo.length);
	});

	test('Should render email svg icon', () => {
		expect(wrapper.find('div').hasClass('social-item')).toBeTruthy();
		expect(wrapper.find('a').prop('href')).toBe('mailto:rojascruzoscar@gmail.com');
		expect(wrapper.find('a').prop('aria-label')).toBe('@augusticor email address');
		expect(wrapper.find('svg').exists()).toBe(true);
	});
});
