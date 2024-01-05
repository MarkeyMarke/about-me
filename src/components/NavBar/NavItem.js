import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const propTypes = {
    label: PropTypes.string.isRequired,
    scrollSpyId: PropTypes.string.isRequired,
    icon: PropTypes.shape({}).isRequired,
};

const NavItem = React.forwardRef(({ label, scrollSpyId, icon }, ref) => (
    <a href={`#${scrollSpyId}`} className="navigation-item" ref={ref}>
        <FontAwesomeIcon icon={icon} />
        <span>{label}</span>
    </a>
));

NavItem.displayName = 'NavItem';
NavItem.propTypes = propTypes;

export default NavItem;
