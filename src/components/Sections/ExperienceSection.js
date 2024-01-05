import PageSection from '../PageSection';
import SectionData from '../../constants/SectionData';

function ExperienceSection() {
    return (
        <PageSection
            title={SectionData.EXPERIENCE.label}
            scrollSpyId={SectionData.EXPERIENCE.id}
        >
            <span>TESTING TEXT CONTENT</span>
        </PageSection>
    );
}

export default ExperienceSection;
