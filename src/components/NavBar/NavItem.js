import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    scrollSpyId: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

function NavItem({ href, label, scrollSpyId, icon }) {
    const handleClick = (e) => {
        e.preventDefault();
        const target = window.document.getElementById(e.currentTarget.href.split('#')[1]);
        if (target) {
            const headerOffset = 20;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <a onClick={handleClick} href={href} className="navigation-item">
            <FontAwesomeIcon icon={icon} />
            <span data-to-scrollspy-id={scrollSpyId}>{label}</span>
        </a>
    );
}

NavItem.propTypes = propTypes;

export default NavItem;
