import { shallow } from 'enzyme';

import LinkItem from '../../../components/main/LinkItem';
import { linksInfo } from '../../../data/links-data';

describe('Tests on <LinkItem /> component', () => {
	test('Should match default values snapshot', () => {
		const wrapper = shallow(<LinkItem />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Should render default values if no props', () => {
		const wrapper = shallow(<LinkItem />);

		expect(wrapper.find('a').prop('href')).toBe('https://linktr.ee/');
		expect(wrapper.find('.icon').prop('src')).toBe(linksInfo[linksInfo.length - 1].icon);
		expect(wrapper.find('.icon').prop('alt')).toBe('Linkt.ree link');
		expect(wrapper.find('p').first().text()).toBe('Linkt.ree');
	});

	test('Should match correct snapshot and render linkedin info correctly', () => {
		const linkedinInfo = linksInfo[0];

		const wrapper = shallow(<LinkItem link={linkedinInfo.link} icon={linkedinInfo.icon} linklabel={linkedinInfo.label} />);

		expect(wrapper).toMatchSnapshot();

		expect(wrapper.find('a').prop('href')).toBe(linkedinInfo.link);
		expect(wrapper.find('.icon').prop('src')).toBe(linkedinInfo.icon);
		expect(wrapper.find('.icon').prop('alt')).toBe(`${linkedinInfo.label} link`);
		expect(wrapper.find('p').first().text()).toBe(linkedinInfo.label);
	});
});
