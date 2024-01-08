import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getStringHashCode from '../../../services/getStringHashCode';

const propTypes = {
    titleIcon: PropTypes.shape({}),
    titleImage: PropTypes.node,
    titleLabel: PropTypes.string.isRequired,
    listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const defaultProps = {
    titleImage: undefined,
    titleIcon: undefined,
};

function SkillsPanelSection({ titleIcon, titleLabel, listItems, titleImage }) {
    return (
        <section className="skills-panel-section">
            <div className="skills-panel-section-title">
                {titleImage}
                {titleIcon && <FontAwesomeIcon icon={titleIcon} />}
                <h1>{titleLabel}</h1>
            </div>
            <div className="skills-panel-section-list-container">
                <ul className="skills-panel-section-list">
                    {listItems.map((listItem) => (
                        // Technically the contents are unique already, but we shouldn't use display values as keys
                        <li key={getStringHashCode(listItem)}>{listItem}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

SkillsPanelSection.propTypes = propTypes;
SkillsPanelSection.defaultProps = defaultProps;
export default SkillsPanelSection;
