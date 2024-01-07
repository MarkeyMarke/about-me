import PropTypes from 'prop-types';

const propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
};

const defaultProps = {
    className: undefined,
};

function Tab({ label, onClick, selected, id, className }) {
    const handleClick = (e) => {
        onClick(e, id);
    };

    return (
        <button
            className={className}
            id={`${id}-tab`}
            role="tab"
            type="button"
            onClick={handleClick}
            aria-selected={selected}
            aria-controls={`${id}-panel`}
        >
            {label}
        </button>
    );
}

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;
export default Tab;
