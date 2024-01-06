import PropTypes from 'prop-types';
import PageSection from '../PageSection';
import SectionData from '../../constants/SectionData';

const propTypes = {
    sectionRef: PropTypes.shape({}).isRequired,
};

function DNDSection({ sectionRef }) {
    return (
        <PageSection
            title={SectionData.DND.label}
            scrollSpyId={SectionData.DND.id}
            sectionRef={sectionRef}
        >
            <span>TESTING TEXT CONTENT</span>
        </PageSection>
    );
}

DNDSection.propTypes = propTypes;
export default DNDSection;