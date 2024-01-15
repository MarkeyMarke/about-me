import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useIsDeviceNarrower from '../../../services/useIsDeviceNarrower';
import NavBar from '../NavBar';

jest.mock('../../../services/useIsDeviceNarrower');

describe('NavBar', () => {
    beforeEach(() => {});

    test('render wide device nav', () => {
        useIsDeviceNarrower.mockReturnValue(false);
        render(<NavBar scrollSpyIndex={1} />);

        const nav = screen.getByRole('navigation');
        const [firstName, lastName] = within(nav).getAllByRole('heading');
        expect(firstName).toHaveTextContent('Mark');
        expect(lastName).toHaveTextContent('Casapao');

        const navItems = within(nav).getAllByRole('link');
        const [welcome, experience, dnd, games] = navItems;

        expect(welcome).toHaveTextContent('Welcome');
        expect(welcome).toHaveAttribute('href', '#welcome');
        const welcomeIcon = within(welcome).getByRole('img', { hidden: true });
        expect(welcomeIcon).toHaveAttribute('data-icon', 'user-tie');

        expect(experience).toHaveTextContent('Experience');
        expect(experience).toHaveAttribute('href', '#experience');
        const experienceIcon = within(experience).getByRole('img', {
            hidden: true,
        });
        expect(experienceIcon).toHaveAttribute('data-icon', 'briefcase');

        expect(dnd).toHaveTextContent('Dungeons & Dragons');
        expect(dnd).toHaveAttribute('href', '#dnd');
        const dndIcon = within(dnd).getByRole('img', { hidden: true });
        expect(dndIcon).toHaveAttribute('data-icon', 'dragon');

        expect(games).toHaveTextContent('Video Games');
        expect(games).toHaveAttribute('href', '#game-dev');
        const gamesIcon = within(games).getByRole('img', { hidden: true });
        expect(gamesIcon).toHaveAttribute('data-icon', 'gamepad');

        expect(experience).toHaveClass('scrollspy-active');
    });

    test('render narrow device nav', () => {
        useIsDeviceNarrower.mockReturnValue(true);

        // Mocking so that OffCanvas bootstrap doesnt crash jest
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation((query) => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });

        render(<NavBar scrollSpyIndex={1} />);

        const nav = screen.getByRole('navigation');
        const [firstName, lastName] = within(nav).getAllByRole('heading');
        expect(firstName).toHaveTextContent('Mark');
        expect(lastName).toHaveTextContent('Casapao');

        const hamburgerButton = screen.getByRole('button', {
            name: 'Open navigation menu',
        });
        expect(
            within(hamburgerButton).getByRole('img', { hidden: true }),
        ).toHaveAttribute('data-icon', 'bars');
    });

    test('open offcanvas content', async () => {
        useIsDeviceNarrower.mockReturnValue(true);

        // Mocking so that OffCanvas bootstrap doesnt crash jest
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation((query) => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });

        render(<NavBar scrollSpyIndex={1} />);

        const hamburgerButton = screen.getByRole('button', {
            name: 'Open navigation menu',
        });
        await act(() => {
            userEvent.click(hamburgerButton);
        });

        const dialog = screen.getByRole('dialog');
        const navItems = within(dialog).getAllByRole('link');
        const [welcome, experience, dnd, games] = navItems;

        expect(welcome).toHaveTextContent('Welcome');
        expect(welcome).toHaveAttribute('href', '#welcome');
        const welcomeIcon = within(welcome).getByRole('img', { hidden: true });
        expect(welcomeIcon).toHaveAttribute('data-icon', 'user-tie');

        expect(experience).toHaveTextContent('Experience');
        expect(experience).toHaveAttribute('href', '#experience');
        const experienceIcon = within(experience).getByRole('img', {
            hidden: true,
        });
        expect(experienceIcon).toHaveAttribute('data-icon', 'briefcase');

        expect(dnd).toHaveTextContent('Dungeons & Dragons');
        expect(dnd).toHaveAttribute('href', '#dnd');
        const dndIcon = within(dnd).getByRole('img', { hidden: true });
        expect(dndIcon).toHaveAttribute('data-icon', 'dragon');

        expect(games).toHaveTextContent('Video Games');
        expect(games).toHaveAttribute('href', '#game-dev');
        const gamesIcon = within(games).getByRole('img', { hidden: true });
        expect(gamesIcon).toHaveAttribute('data-icon', 'gamepad');
    });
});
