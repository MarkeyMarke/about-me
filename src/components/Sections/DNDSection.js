import PageSection from '../PageSection';
import SectionData from '../../constants/SectionData';

function DNDSection() {
    return (
        <PageSection
            title={SectionData.DND.label}
            scrollSpyId={SectionData.DND.id}
        >
            <span>TESTING TEXT CONTENT</span>
        </PageSection>
    );
}

export default DNDSection;
