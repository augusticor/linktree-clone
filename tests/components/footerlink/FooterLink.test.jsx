import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FooterLink from '../../../src/components/footerlink/FooterLink';

describe('Tests on <FooterLink /> component', () => {
  it('Should match snapshot', () => {
    const footerLink = render(<FooterLink />);
    expect(footerLink).toMatchSnapshot();
  });

  it('Should find an anchor tag for join augusticor', () => {
    render(<FooterLink />);
    const anchorLink = screen.getAllByRole('link').at(0);
    expect(anchorLink).to.exist;
    expect(anchorLink.textContent).toBe('Join augusticor on Linktree');
  });

  it('Should find an anchor tag of last updated on', () => {
    render(<FooterLink />);
    const anchorLink = screen.getAllByRole('link').at(1);
    expect(anchorLink).to.exist;
    expect(anchorLink.textContent).toMatch(/Last updated: \w/);
  });
});
