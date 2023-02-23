import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HeaderInfo from '../../../src/components/header/HeaderInfo';

describe('Tests on <HeaderInfo /> component', () => {
  it('Should match snapshot', () => {
    const result = render(<HeaderInfo />);
    expect(result).toMatchSnapshot();
  });

  it('Must exists two buttons in header', () => {
    render(<HeaderInfo />);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('Image and bio should exist', () => {
    render(<HeaderInfo />);
    const image = screen.getByRole('img');
    expect(image.className).toBe('image');
    expect(image.getAttribute('alt')).toBe('User profile photography');

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('@augusticor');
    expect(screen.getByRole('heading', { level: 2 }).textContent).include('Software Engineer');
  });
});
