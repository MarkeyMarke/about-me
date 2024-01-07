import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    selected: PropTypes.bool.isRequired,
};

const defaultProps = {
    className: undefined,
};

function TabPanel({ children, id, className, selected }) {
    if (!selected) {
        return null;
    }

    return (
        <div
            className={className}
            id={`${id}-panel`}
            role="tabpanel"
            aria-labelledby={`${id}-tab`}
        >
            {children}
        </div>
    );
}

TabPanel.propTypes = propTypes;
TabPanel.defaultProps = defaultProps;
export default TabPanel;
