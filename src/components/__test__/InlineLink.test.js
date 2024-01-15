import { render, screen } from '@testing-library/react';
import InlineLink from '../InlineLink';

describe('InlineLink', () => {
    test('render content', () => {
        render(<InlineLink href="#anHref" linkText="A link text" />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '#anHref');
        expect(link).toHaveTextContent('A link text');
    });
});
