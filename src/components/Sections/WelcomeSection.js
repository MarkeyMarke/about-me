import PropTypes from 'prop-types';
import PageSection from '../PageSection';
import markProfile from '../../images/MarkProfile.jpg';
import SectionData from '../../constants/SectionData';
import './styles/WelcomeSection.scss';

const propTypes = {
    sectionRef: PropTypes.shape({}).isRequired,
};

function WelcomeSection({ sectionRef }) {
    return (
        <PageSection
            title="Nice to meet you, I'm Mark"
            scrollSpyId={SectionData.WELCOME.id}
            sectionRef={sectionRef}
            className="welcome-page-section"
        >
            <div className="quote-container">
                <div className="profile-pic-border">
                    <img src={markProfile} alt="Profile of Mark Casapao" />
                </div>
                <figure className="quote">
                    <blockquote>
                        The two most important days in your life are the day you
                        are born and the day you find out why.
                    </blockquote>
                    <figcaption>&mdash; Mark Twain</figcaption>
                </figure>
            </div>
            <p>TESTING TEXT CONTENT</p>
        </PageSection>
    );
}

WelcomeSection.propTypes = propTypes;
export default WelcomeSection;
