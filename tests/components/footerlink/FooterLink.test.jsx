import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FooterLink from '../../../src/components/footerlink/FooterLink';

describe('Tests on <FooterLink /> component', () => {
  it('Should match snapshot', () => {
    const footerLink = render(<FooterLink />);
    expect(footerLink).toMatchSnapshot();
  });

  it('Should find an svg', () => {
    render(<FooterLink />);
    expect(screen.getByTestId('BlackGreenLogo')).to.exist;
  });
});
