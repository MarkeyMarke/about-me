import PropTypes from 'prop-types';
import getStringHashCode from '../../../services/getStringHashCode';

const propTypes = {
    image: PropTypes.node.isRequired,
    imageAltText: PropTypes.string.isRequired,
    titleText: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    companyRole: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    companyDescription: PropTypes.string.isRequired,
    listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function WorkPanelSection({
    image,
    imageAltText,
    titleText,
    href,
    companyRole,
    date,
    companyDescription,
    listItems,
}) {
    return (
        <section className="work-panel-section">
            <div className="work-panel-company-image-border">
                <a href={href} rel="noopener noreferrer" target="_blank">
                    <div className="work-panel-company-image-overlay">
                        More info
                    </div>
                    <img src={image} alt={imageAltText} />
                </a>
            </div>
            <div className="work-panel-company-details">
                <h1>{titleText}</h1>
                <p>{companyDescription}</p>
                <div className="work-panel-company-role-details">
                    <span>
                        <strong>{companyRole}</strong>
                    </span>
                    <span>{date}</span>
                    <ul>
                        {listItems.map((listItem) => (
                            // Technically the contents are unique already, but we shouldn't use display values as keys
                            <li key={getStringHashCode(listItem)}>
                                {listItem}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

WorkPanelSection.propTypes = propTypes;
export default WorkPanelSection;
