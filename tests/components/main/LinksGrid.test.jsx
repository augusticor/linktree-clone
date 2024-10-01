import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LinksGrid from '../../../src/components/main/LinksGrid';
import { linksInfo } from '../../../src/data/links-data';

describe('Tests on <LinksGrid/> component', () => {
  it('Should match snapshot', () => {
    const wrapper = render(<LinksGrid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render the same amount of elements in linksinfo array', () => {
    const { container } = render(<LinksGrid />);
    expect(container.getElementsByClassName('link-item').length).toBe(linksInfo.length);
  });

  it.skip('Should render email svg icon', () => {
    const { container } = render(<LinksGrid />);

    expect(screen.getByTestId('emailtosvg').className).toBe('social-item');

    const emailLink = screen.getAllByRole('link').at(-1);
    expect(emailLink.getAttribute('href')).toBe('mailto:rojascruzoscar@gmail.com');
    expect(emailLink.getAttribute('aria-label')).toBe('@augusticor email address');

    expect(container.getElementsByTagName('svg').length).toBeGreaterThan(1);
    expect(container.getElementsByClassName('svg').length).toBeLessThanOrEqual(1);
  });
});
