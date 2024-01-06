import PropTypes from 'prop-types';
import PageSection from '../PageSection';
import SectionData from '../../constants/SectionData';

const propTypes = {
    sectionRef: PropTypes.shape({}).isRequired,
};

function ExperienceSection({ sectionRef }) {
    return (
        <PageSection
            title={SectionData.EXPERIENCE.label}
            scrollSpyId={SectionData.EXPERIENCE.id}
            sectionRef={sectionRef}
        >
            <span>TESTING TEXT CONTENT</span>
        </PageSection>
    );
}

ExperienceSection.propTypes = propTypes;
export default ExperienceSection;