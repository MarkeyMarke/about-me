import PropTypes from 'prop-types';
import cn from 'classnames';

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
    const tabClassName = cn('tab', className);
    const handleClick = (e) => {
        onClick(e, id);
    };

    return (
        <button
            className={tabClassName}
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
