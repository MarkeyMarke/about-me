import PropTypes from 'prop-types';
import { PageSection } from '../PageSection';
import SectionData from '../../constants/SectionData';
import './styles/DNDSection.scss';

const propTypes = {
    sectionRef: PropTypes.shape({}).isRequired,
};

function DNDSection({ sectionRef }) {
    return (
        <PageSection
            title={SectionData.DND.label}
            scrollSpyId={SectionData.DND.id}
            sectionRef={sectionRef}
            className="dnd-page-section"
        >
            <span>TESTING TEXT CONTENT</span>
        </PageSection>
    );
}

DNDSection.propTypes = propTypes;
export default DNDSection;
