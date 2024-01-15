import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './__styles__/IconButton.scss';

const propTypes = {
    icon: PropTypes.shape({}).isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
    ariaLabel: PropTypes.string.isRequired,
};

const defaultProps = {
    href: '',
    onClick: undefined,
};

function IconButton({ icon, href, onClick, ariaLabel }) {
    const className = 'icon-button';

    if (href) {
        return (
            <a
                href={href}
                aria-label={ariaLabel}
                onClick={onClick}
                className={className}
                rel="noopener noreferrer"
                target="_blank"
            >
                <FontAwesomeIcon icon={icon} />
            </a>
        );
    }

    return (
        <button
            type="button"
            aria-label={ariaLabel}
            className={className}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;
export default IconButton;
