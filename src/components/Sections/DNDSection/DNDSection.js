import PropTypes from 'prop-types';
import PageSection from '../../PageSection';
import sectionData from '../../../constants/sectionData';
import DiceRoller from './DiceRoller';
import './__styles__/DNDSection.scss';
import ImageLink from '../../ImageLink';
import foundryLogo from '../../../images/foundryLogo.png';
import dndBeyond from '../../../images/dndBeyondLogo.png';
import forgeLogo from '../../../images/forgeLogo.png';
import Paragraph from '../../Paragraph';
import InlineLink from '../../InlineLink';

const foundryHref = 'https://foundryvtt.com/';
const forgeHref = 'https://forge-vtt.com/';
const dndBeyondHref = 'https://www.dndbeyond.com/';

const propTypes = {
    sectionRef: PropTypes.shape({}).isRequired,
};

function DNDSection({ sectionRef }) {
    const foundryVTTLink = (
        <InlineLink href={foundryHref} linkText="Foundry VTT" />
    );

    const dndBeyondLink = (
        <InlineLink href={dndBeyondHref} linkText="D&D Beyond" />
    );

    const theForgeLink = <InlineLink href={forgeHref} linkText="The Forge" />;

    const lineBreak = (
        <>
            <br />
            <br />
        </>
    );

    return (
        <PageSection
            title={sectionData.DND.label}
            scrollSpyId={sectionData.DND.id}
            sectionRef={sectionRef}
            className="dnd-page-section"
        >
            <div className="dnd-description-container">
                <div className="initiative-roller-container">
                    <DiceRoller />
                    <span>Roll for initiative!</span>
                </div>
                <div className="description">
                    <Paragraph title="Why I Play D&D">
                        I share just as much passion for D&D (Dungeons and
                        Dragons) as I do for software development. I own nearly
                        every sourcebook in {dndBeyondLink} and have been
                        playing with the same group since 2018. Currently, we
                        play digitally on a virtual tabletop like{' '}
                        {foundryVTTLink} along with 100+ mods that run in
                        JavaScript. Rather than hosting the game on my computer,
                        we use a hosting provider like {theForgeLink}.
                        {lineBreak}I am the current dungeon master of the group,
                        meaning that I am in charge of setting up the D&D
                        campaign. This includes things like running a server,
                        planning adventures, and implementing features on the
                        virtual tabletop. Such a position has taught me the
                        importance of leadership, communication, and being a
                        team player. Being a dungeon master has also served my
                        itch for game development with all the digital aspects
                        of working in Foundry VTT.
                    </Paragraph>
                </div>
            </div>
            <div className="dnd-links">
                <ImageLink
                    image={foundryLogo}
                    imageAltText="Foundry Virtual Tabletop logo"
                    href={foundryHref}
                    subText="Foundry VTT"
                />
                <ImageLink
                    image={forgeLogo}
                    imageAltText="The Forge logo"
                    href={forgeHref}
                    subText="The Forge"
                />
                <ImageLink
                    image={dndBeyond}
                    imageAltText="D&D Beyond logo"
                    href={dndBeyondHref}
                    subText="D&D Beyond"
                />
            </div>
        </PageSection>
    );
}

DNDSection.propTypes = propTypes;
export default DNDSection;
