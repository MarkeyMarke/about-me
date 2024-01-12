import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';
import PageSection from '../../PageSection';
import sectionData from '../../../constants/sectionData';
import ImageLink from '../../ImageLink';
import unityLogo from '../../../images/unityLogo.png';
import './__styles__/GameDevSection.scss';
import Paragraph from '../../Paragraph';
import InlineLink from '../../InlineLink';

const unityHref = 'https://unity.com/';
const DESCRIPTION_ITEMS = [
    {
        term: `Baldur's Gate 3`,
        id: 'BG3',
        description: `This game is especially fun when you're playing with friends. There are hundreds of hours worth of content with many significant story choices. Adding the many options for classes and builds the sheer versatility makes this game extremely replayable.`,
        href: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
    },
    {
        term: `Persona 5: Royal`,
        id: 'P5R',
        description: `The very ambitious approach this game took for the stylish menus, music, and combat stood out to me more than any other game I've ever played. 
        The character writing is also exceptional, to the point where I enjoyed the dialogue, even if the cutscenes would last several minutes.`,
        href: 'https://store.steampowered.com/app/1687950/Persona_5_Royal/',
    },
    {
        term: `Witcher 3: Wild Hunt`,
        id: 'W3',
        description: `The visuals were incredibly stunning, to the point where most games released in 2023 still can't compare. The music and lore of the game were so well written that it was easy to lose hours of the day immersing myself in the world that the main character lived in.`,
        href: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/',
    },
    {
        term: `Red Dead Redemption 2`,
        id: 'RDR2',
        description: `If you were to watch animals and other characters in the game, you would notice they'd live their entire lives doing all kinds of activities. I usually use fast travel in games, but the immersion in this game is done so well that I didn't bother to use fast travel.`,
        href: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/',
    },
    {
        term: `Cyberpunk 2077`,
        id: 'CP2077',
        description: `Despite this game's bad reputation for its release, CD Projekt Red has done well to clean up the game ever since, and they managed to turn it around. The game has overhauled the combat system twice now and made it drastically more fun and stylish with each patch.`,
        href: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
    },
    {
        term: `Hogwarts Legacy`,
        id: 'HGL',
        description: `The player is rewarded for exploration as much as they do for combat. I found something to do in every corner of the game, to the point where it was easy to lose myself in the magical world. On top of that, the combat felt very fluid and fast-paced.`,
        href: 'https://store.steampowered.com/app/990080/Hogwarts_Legacy/',
    },
];

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
                        {shootyLink} for a small price, but I was in it less for
                        the money and more for the fun and learning experiences
                        it brought.
                    </Paragraph>
                </div>
            </div>
            <div className="favorite-games-container">
                <h1>Favorite Games</h1>
                <div className="description-list-container">
                    <dl>
                        {DESCRIPTION_ITEMS.map(
                            ({ term, description, id, href }) => (
                                <Fragment key={id}>
                                    <dt>
                                        <a
                                            href={href}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <span>{term}</span>
                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                            />
                                        </a>
                                    </dt>
                                    <dd>{description}</dd>
                                </Fragment>
                            ),
                        )}
                    </dl>
                </div>
            </div>
        </PageSection>
    );
}

GameDevSection.propTypes = propTypes;
export default GameDevSection;
