import PropTypes from 'prop-types';
import cn from 'classnames';

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

    const tabPanelClassName = cn('tab-panel', className);

    return (
        <div
            className={tabPanelClassName}
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
