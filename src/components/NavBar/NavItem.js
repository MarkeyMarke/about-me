import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const propTypes = {
    label: PropTypes.string.isRequired,
    scrollSpyId: PropTypes.string.isRequired,
    icon: PropTypes.shape({}).isRequired,
};

function NavItem({ label, scrollSpyId, icon }) {
    return (
        <a href={`#${scrollSpyId}`} className="navigation-item">
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span>
        </a>
    );
}

NavItem.propTypes = propTypes;

export default NavItem;
