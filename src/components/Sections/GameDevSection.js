import PropTypes from 'prop-types';
import PageSection from '../PageSection';
import SectionData from '../../constants/SectionData';
import './styles/GameDevSection.scss';

const propTypes = {
    sectionRef: PropTypes.shape({}).isRequired,
};

function GameDevSection({ sectionRef }) {
    return (
        <PageSection
            title={SectionData.GAME_DEV.label}
            scrollSpyId={SectionData.GAME_DEV.id}
            sectionRef={sectionRef}
            className="game-dev-page-section"
        >
            <span>TESTING TEXT CONTENT</span>
        </PageSection>
    );
}

GameDevSection.propTypes = propTypes;
export default GameDevSection;
