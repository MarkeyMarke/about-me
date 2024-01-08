import { faJava } from '@fortawesome/free-brands-svg-icons/faJava';
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import SkillsPanelSection from './SkillsPanelSection';
import useIsDeviceNarrower from '../../../services/useIsDeviceNarrower';
import {
    NAV_WIDTH_PX,
    MAIN_PAGE_HORIZONTAL_PADDING_PX,
} from '../../../constants/DeviceDimensions';

const DOUBLE_COLUMN_PANEL_MIN_WIDTH = 1200;
const DOUBLE_COLUMN_VIEWPORT_PX =
    NAV_WIDTH_PX +
    2 * MAIN_PAGE_HORIZONTAL_PADDING_PX +
    DOUBLE_COLUMN_PANEL_MIN_WIDTH;

const jsSkillsSection = (
    <SkillsPanelSection
        titleIcon={faJs}
        titleLabel="JavaScript"
        listItems={[
            'Developing UI using ReactJS',
            'Writing unit tests using React Testing Library',
            'Theming UI components using EmotionJS',
            'Creating progressive web apps using React Native',
            'Building middleware servers using ExpressJS',
            'Manipulating HTML elements using JQuery',
        ]}
    />
);

const htmlSkillsSection = (
    <SkillsPanelSection
        titleIcon={faHtml5}
        titleLabel="HTML and CSS"
        listItems={[
            'Making accessible UI using ARIA roles and attributes',
            'Styling HTML elements using SASS',
            'Supporting multiple screen sizes using responsive UI',
        ]}
    />
);

const javaSkillsSection = (
    <SkillsPanelSection
        titleIcon={faJava}
        titleLabel="Java"
        listItems={[
            'Implementing web APIs using Spring',
            'Creating unit tests using JUnit',
            'Mocking services using Mockito',
        ]}
    />
);

function SkillsPanel() {
    const isOneColumn = useIsDeviceNarrower(DOUBLE_COLUMN_VIEWPORT_PX);

    if (isOneColumn) {
        return (
            <>
                {jsSkillsSection}
                {htmlSkillsSection}
                {javaSkillsSection}
            </>
        );
    }

    const columnClassName = 'skills-panel-column';

    return (
        <div className="skills-panel-columns">
            <div className={columnClassName}>{jsSkillsSection}</div>
            <div className={columnClassName}>
                {htmlSkillsSection}
                {javaSkillsSection}
            </div>
        </div>
    );
}

export default SkillsPanel;
