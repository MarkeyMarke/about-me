import PageSection from '../PageSection';
import SectionData from '../../constants/SectionData';

function GameDevSection() {
    return (
        <PageSection
            title={SectionData.GAME_DEV.label}
            scrollSpyId={SectionData.GAME_DEV.id}
        >
            <span>TESTING TEXT CONTENT</span>
        </PageSection>
    );
}

export default GameDevSection;
