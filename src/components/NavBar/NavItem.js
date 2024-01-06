import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const propTypes = {
    label: PropTypes.string.isRequired,
    scrollSpyId: PropTypes.string.isRequired,
    icon: PropTypes.shape({}).isRequired,
    inView: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
};

const defaultProps = {
    onClick: undefined,
};

function NavItem({ label, scrollSpyId, icon, inView, onClick }) {
    const classNames = cn({
        'navigation-item': true,
        'scrollspy-active': inView,
    });

    return (
        <a href={`#${scrollSpyId}`} className={classNames} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span>
        </a>
    );
}

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;
export default NavItem;
