import PageSection from '../PageSection';
import markProfile from '../../images/MarkProfile.jpg';
import SectionData from '../../constants/SectionData';

function WelcomeSection() {
    return (
        <PageSection
            title={SectionData.WELCOME.label}
            scrollSpyId={SectionData.WELCOME.id}
        >
            <img src={markProfile} alt="Profile of Mark Casapao" />
            <span>TESTING TEXT CONTENT</span>
        </PageSection>
    );
}

export default WelcomeSection;
