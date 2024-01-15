import { render, screen, within } from '@testing-library/react';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons/faDiceD20';
import userEvent from '@testing-library/user-event';
import IconButton from '../IconButton';

describe('IconButton', () => {
    test('render link', () => {
        render(
            <IconButton
                href="#anHref"
                icon={faDiceD20}
                ariaLabel="Aria label"
            />,
        );
        const link = screen.getByRole('link', { name: 'Aria label' });
        expect(link).toHaveAttribute('href', '#anHref');
        expect(
            within(link).getByRole('img', { hidden: true }),
        ).toBeInTheDocument();
    });

    test('render button', async () => {
        const callback = jest.fn();
        render(
            <IconButton
                onClick={callback}
                icon={faDiceD20}
                ariaLabel="Aria label"
            />,
        );

        const button = screen.getByRole('button', { name: 'Aria label' });
        expect(
            within(button).getByRole('img', { hidden: true }),
        ).toBeInTheDocument();
    });

    test('trigger button onClick', () => {
        const callback = jest.fn();
        render(
            <IconButton
                onClick={callback}
                icon={faDiceD20}
                ariaLabel="Aria label"
            />,
        );

        const button = screen.getByRole('button', { name: 'Aria label' });
        userEvent.click(button);
        expect(callback).toHaveBeenCalledTimes(1);
    });
});
