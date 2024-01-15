import { render, screen, within } from '@testing-library/react';
import ImageLink from '../ImageLink';
import sjsuLogo from '../../images/sjsuLogo.png';

describe('ImageLink', () => {
    test('render content', () => {
        const { container } = render(
            <ImageLink
                href="#anHref"
                subText="Sub text"
                image={sjsuLogo}
                imageAltText="Alt text"
            />,
        );
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '#anHref');
        expect(within(link).getByRole('img')).toHaveAttribute(
            'alt',
            'Alt text',
        );
        expect(container).toHaveTextContent('Sub text');
    });
});
