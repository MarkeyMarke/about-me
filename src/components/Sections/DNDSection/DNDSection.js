import PropTypes from 'prop-types';
import PageSection from '../../PageSection';
import sectionData from '../../../constants/sectionData';
import DiceRoller from './DiceRoller';
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
            <DiceRoller />
        </PageSection>
    );
}

DNDSection.propTypes = propTypes;
export default DNDSection;
