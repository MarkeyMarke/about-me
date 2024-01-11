import PropTypes from 'prop-types';
import PageSection from '../../PageSection';
import sectionData from '../../../constants/sectionData';
import DiceRoller from './DiceRoller';
import './__styles__/DNDSection.scss';
import ImageButton from '../../ImageButton';
import foundryLogo from '../../../images/foundryLogo.png';
import dndBeyond from '../../../images/dndBeyondLogo.png';
import Paragraph from '../../Paragraph';

const propTypes = {
    sectionRef: PropTypes.shape({}).isRequired,
};

function DNDSection({ sectionRef }) {
    return (
        <PageSection
            title={sectionData.DND.label}
            scrollSpyId={sectionData.DND.id}
            sectionRef={sectionRef}
            className="dnd-page-section"
        >
            <div className="interactive-dnd-description">
                <div className="initiative-roller">
                    <DiceRoller />
                    <span>Roll for initiative!</span>
                </div>
                <div className="description">
                    <Paragraph title="Why I Play D&D">
                        I share just as much passion for D&D (Dungeons and
                        Dragons) as I do for software development. I own nearly
                        every sourcebook to date in D&D Beyond, and have been
                        playing with the same group since 2018. Nowadays, we
                        play digitally on Foundry VTT with 100+ mods that run in
                        JavaScript.
                        <br />
                        <br />I am the current dungeon master of the group,
                        meaning that I am in charge of setting up the D&D
                        campaign. Such a position has taught me the importance
                        of leadership, communication, and being a team player.
                        In a way, being a dungeon master has also served my itch
                        for game development with all the digital aspects of
                        working in Foundry VTT.
                    </Paragraph>
                </div>
            </div>
            <div className="dnd-links">
                <div className="dnd-link">
                    <ImageButton
                        image={foundryLogo}
                        imageAltText="Foundry Virtual Tabletop logo"
                        href="https://foundryvtt.com/"
                    />
                    <span>Foundry VTT</span>
                </div>
                <div className="dnd-link">
                    <ImageButton
                        image={dndBeyond}
                        imageAltText="D&D Beyond logo"
                        href="https://www.dndbeyond.com/"
                    />
                    <span>D&D Beyond</span>
                </div>
            </div>
        </PageSection>
    );
}

DNDSection.propTypes = propTypes;
export default DNDSection;
