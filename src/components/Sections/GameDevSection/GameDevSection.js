import PropTypes from 'prop-types';
import PageSection from '../../PageSection';
import sectionData from '../../../constants/sectionData';
import './__styles__/GameDevSection.scss';

const propTypes = {
    sectionRef: PropTypes.shape({}).isRequired,
};

function GameDevSection({ sectionRef }) {
    return (
        <PageSection
            title={sectionData.GAME_DEV.label}
            scrollSpyId={sectionData.GAME_DEV.id}
            sectionRef={sectionRef}
            className="game-dev-page-section"
        >
            <span>TESTING TEXT CONTENT</span>
        </PageSection>
    );
}

GameDevSection.propTypes = propTypes;
export default GameDevSection;
