import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { linksInfo } from '../../../src/data/links-data';
import LinkItem from '../../../src/components/main/LinkItem';

describe('Tests on <LinkItem /> component', () => {
  it('Should render default values if no props', () => {
    render(<LinkItem />);
    expect(screen.getByRole('link').getAttribute('href')).toBe('https://linktr.ee/');
    expect(screen.getByRole('img').getAttribute('src')).toBe(
      linksInfo[linksInfo.length - 1].icon
    );
    expect(screen.getByRole('img').getAttribute('alt')).toBe('Linkt.ree link');
    expect(screen.getByTestId('linklabel').textContent).toBe('Linkt.ree');
  });

  it('Should match correct snapshot and render LinkedIn info correctly', () => {
    const linkedinInfo = linksInfo[0];

    render(
      <LinkItem
        link={linkedinInfo.link}
        icon={linkedinInfo.icon}
        linklabel={linkedinInfo.label}
      />
    );

    expect(screen.getByRole('link').getAttribute('href')).toBe(linkedinInfo.link);
    expect(screen.getByRole('img').getAttribute('src')).toBe(linkedinInfo.icon);
    expect(screen.getByRole('img').getAttribute('alt')).toBe(`${linkedinInfo.label} link`);
    expect(screen.getByTestId('linklabel').textContent).toBe(linkedinInfo.label);
  });
});
