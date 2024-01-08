import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getStringHashCode from '../../../services/getStringHashCode';

const propTypes = {
    titleIcon: PropTypes.shape({}).isRequired,
    titleLabel: PropTypes.string.isRequired,
    listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function SkillsPanelSection({ titleIcon, titleLabel, listItems }) {
    return (
        <section className="skills-panel-section">
            <div className="skills-panel-section-title">
                <FontAwesomeIcon icon={titleIcon} />
                <h1>{titleLabel}</h1>
            </div>
            <ul className="skills-panel-section-list">
                {listItems.map((listItem) => (
                    // Technically the contents are unique already, but we shouldn't use display values as keys
                    <li key={getStringHashCode(listItem)}>{listItem}</li>
                ))}
            </ul>
        </section>
    );
}

SkillsPanelSection.propTypes = propTypes;
export default SkillsPanelSection;
