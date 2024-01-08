import PropTypes from 'prop-types';
import PageSection from '../../PageSection';
import sectionData from '../../../constants/sectionData';
import './__styles__/DNDSection.scss';

const propTypes = {
    sectionRef: PropTypes.shape({}).isRequired,
};

function DNDSection({ sectionRef }) {
    return (
        <PageSection
            title={sectionData.DND.label}
            scrollSpyId={sectionData.DND.id}
            sectionRef={sectionRef}
            className="dnd-page-section"
        >
            <span>TESTING TEXT CONTENT</span>
        </PageSection>
    );
}

DNDSection.propTypes = propTypes;
export default DNDSection;
