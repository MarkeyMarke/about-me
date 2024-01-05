import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const propTypes = {
    label: PropTypes.string.isRequired,
    scrollSpyId: PropTypes.string.isRequired,
    icon: PropTypes.shape({}).isRequired,
    inView: PropTypes.bool.isRequired,
};

function NavItem({ label, scrollSpyId, icon, inView }) {
    const classNames = cn({
        'navigation-item': true,
        'scrollspy-active': inView,
    });

    return (
        <a href={`#${scrollSpyId}`} className={classNames}>
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span>
        </a>
    );
}

NavItem.propTypes = propTypes;

export default NavItem;
