import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import PropTypes from 'prop-types';
import PageSection from '../../PageSection';
import Paragraph from '../../Paragraph';
import markProfile from '../../../images/markProfile.jpg';
import SectionData from '../../../constants/SectionData';
import IconButton from '../../IconButton';
import './__styles__/WelcomeSection.scss';

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
            <Paragraph title="About Me">
                I&#39;m a web developer at work but also a game development
                enthusiast at home. I am passionate about building applications
                with responsive UI, accessibility, and a seamless flow in UX. I
                believe in strong communication and leadership with a
                growth-oriented mindset.
            </Paragraph>
            <div className="welcome-page-section-icon-buttons">
                <IconButton
                    href="https://www.linkedin.com/in/mkccasapao/"
                    icon={faLinkedin}
                    ariaLabel="LinkedIn link"
                />
                <IconButton
                    href="https://github.com/MarkeyMarke"
                    icon={faGithub}
                    ariaLabel="GitHub link"
                />
                <IconButton
                    href="mailto:casapao.markkenneth@gmail.com"
                    icon={faEnvelope}
                    ariaLabel="Email link"
                />
            </div>
        </PageSection>
    );
}

WelcomeSection.propTypes = propTypes;
export default WelcomeSection;
