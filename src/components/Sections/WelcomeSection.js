import PropTypes from 'prop-types';
import PageSection from '../PageSection';
import markProfile from '../../images/MarkProfile.jpg';
import SectionData from '../../constants/SectionData';

const propTypes = {
    sectionRef: PropTypes.shape({}).isRequired,
};

function WelcomeSection({ sectionRef }) {
    return (
        <PageSection
            title="Hello, Welcome to My Page!"
            scrollSpyId={SectionData.WELCOME.id}
            sectionRef={sectionRef}
        >
            <img src={markProfile} alt="Profile of Mark Casapao" />
            <span>TESTING TEXT CONTENT</span>
        </PageSection>
    );
}

WelcomeSection.propTypes = propTypes;
export default WelcomeSection;
