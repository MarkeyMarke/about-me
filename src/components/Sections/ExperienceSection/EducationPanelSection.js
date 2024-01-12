import { Fragment } from 'react';
import PropTypes from 'prop-types';
import ImageLink from '../../ImageLink';
import './__styles__/EducationPanel.scss';

const propTypes = {
    image: PropTypes.node.isRequired,
    imageAltText: PropTypes.string.isRequired,
    titleLabel: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    dateText: PropTypes.string.isRequired,
    gpa: PropTypes.number.isRequired,
    descriptionItems: PropTypes.arrayOf(
        PropTypes.exact({
            term: PropTypes.string,
            description: PropTypes.string,
            id: PropTypes.string,
        }),
    ).isRequired,
};

function EducationPanelSection({
    image,
    imageAltText,
    titleLabel,
    href,
    dateText,
    gpa,
    descriptionItems,
}) {
    return (
        <section className="education-panel-section">
            <ImageLink href={href} image={image} imageAltText={imageAltText} />
            <div className="education-panel-school-details">
                <h1>{titleLabel}</h1>
                <div className="education-panel-school-description">
                    <span>
                        <i>{`${dateText}, GPA: ${gpa}`}</i>
                    </span>
                    <dl>
                        {descriptionItems.map(({ term, description, id }) => (
                            <Fragment key={id}>
                                <dt>{term}</dt>
                                <dd>{description}</dd>
                            </Fragment>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}

EducationPanelSection.propTypes = propTypes;
export default EducationPanelSection;
