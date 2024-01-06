import PropTypes from 'prop-types';
import { PageSection, PageSectionParagraph } from '../PageSection';
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
            <PageSectionParagraph title="About Me">
                I&#39;m a web developer at work but also a game development
                enthusiast at home. I am passionate about building applications
                with responsive UI, accessibility, and a seamless flow in UX. I
                believe in strong communication, leadership, and keeping a
                growth-oriented mindset.
            </PageSectionParagraph>
        </PageSection>
    );
}

WelcomeSection.propTypes = propTypes;
export default WelcomeSection;
