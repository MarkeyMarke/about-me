import PropTypes from 'prop-types';
import PageSection from '../../PageSection';
import sectionData from '../../../constants/sectionData';
import ImageLink from '../../ImageLink';
import unityLogo from '../../../images/unityLogo.png';
import './__styles__/GameDevSection.scss';
import Paragraph from '../../Paragraph';
import InlineLink from '../../InlineLink';

const unityHref = 'https://unity.com/';

const propTypes = {
    sectionRef: PropTypes.shape({}).isRequired,
};

function GameDevSection({ sectionRef }) {
    const shootyLink = (
        <InlineLink
            linkText="Steam"
            href="https://store.steampowered.com/app/1550430/Shooty/"
        />
    );

    const unityLink = <InlineLink linkText="Unity" href={unityHref} />;

    return (
        <PageSection
            title={sectionData.GAME_DEV.label}
            scrollSpyId={sectionData.GAME_DEV.id}
            sectionRef={sectionRef}
            className="game-dev-page-section"
        >
            <div className="game-development-description-container">
                <ImageLink
                    href={unityHref}
                    imageAltText="Unity logo"
                    image={unityLogo}
                    subText="Unity"
                />
                <div className="description">
                    <Paragraph title="My Passion For Games">
                        Although I did not pursue game development as a career,
                        I am still passionate about its industry and see games
                        as a work of art. Whether if it is composing music,
                        drawing assets, writing stories, or implementing
                        features, I admire every aspect of the games I play.
                        Right before my last year of college, I worked together
                        with some friends and managed to produce a game using{' '}
                        {unityLink} as a game engine. You can play it on{' '}
                        {shootyLink} for a small price, but it was less about
                        the money and more about the fun and learning
                        experiences it brought.
                    </Paragraph>
                </div>
            </div>
        </PageSection>
    );
}

GameDevSection.propTypes = propTypes;
export default GameDevSection;
