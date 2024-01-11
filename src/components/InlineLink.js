import PropTypes from 'prop-types';
import './__styles__/InlineLink.scss';

const propTypes = {
    href: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
};

function InlineLink({ href, linkText }) {
    return (
        <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-link"
        >
            <i>{linkText}</i>
        </a>
    );
}

InlineLink.propTypes = propTypes;
export default InlineLink;
