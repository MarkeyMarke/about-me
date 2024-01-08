import { faJava } from '@fortawesome/free-brands-svg-icons/faJava';
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import SkillsPanelSection from './SkillsPanelSection';
import useIsDeviceNarrower from '../../../services/useIsDeviceNarrower';
import {
    NAV_WIDTH_PX,
    MAIN_PAGE_HORIZONTAL_PADDING_PX,
} from '../../../constants/DeviceDimensions';

const DOUBLE_COLUMN_PANEL_MIN_WIDTH_PX = 1200;
const DOUBLE_COLUMN_VIEWPORT_PX =
    NAV_WIDTH_PX +
    2 * MAIN_PAGE_HORIZONTAL_PADDING_PX +
    DOUBLE_COLUMN_PANEL_MIN_WIDTH_PX;

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
            'Querying MySQL databases using JDBC',
        ]}
    />
);

const cSharpSkillsSection = (
    <SkillsPanelSection
        titleImage={
            <svg viewBox="0 0 1343 1471.2">
                <title>csharp</title>
                <path
                    fill="#ffffff"
                    d="M653.3 1.3C641 3 630.5 5.9 619 10.7c-4.9 2.1-63.7 34.5-130.5 72.1l-182 102.3-153 86-99 56.5c-8.8 6.2-25.4 23-31.6 32.2-10 14.6-17.1 31.5-21.1 50-1.7 8.1-1.8 23-1.8 326l1.8 326c7.4 34.5 27.1 64.7 54.1 83 3.9 2.6 41.5 24.1 83.6 47.7l484 270.1c15.3 6 29.6 8.5 48 8.6 22 0 41.1-4.4 59.4-13.6 4.4-2.2 73.7-40.9 154-86l267.1-150 141-81.3c24.4-18.9 40.6-44.9 47.7-76.6l2.3-10.4V735.8l-1.8-326c-5.9-27.7-19-51.6-38.3-70-13.9-13.2 4.5-2.5-242.4-141.2L939 130.3 801.5 53 725 11.1c-11.5-5-23.1-8.1-36.2-9.8-13.5-1.8-22.3-1.8-35.5 0zm53.8 352c50.9 4.8 96.5 18.3 142 42 37.4 19.4 69.1 43.3 100.3 75.8 8.5 8.8 27.1 30.7 27.1 31.9 0 .8-8.3 5.8-43 25.8l-80.4 46.6-15.9 9.3-10.1-9.6c-17.6-16.6-35.5-29.2-55.2-39.1-41.5-20.7-87.1-28.2-132.4-21.6-24.4 3.5-44 9.7-67.6 21.4-66.1 32.7-110.8 94.5-122 169-2.4 15.9-2.4 46.4 0 62 7.4 48.3 27.6 89.5 61 124.7 26.9 28.4 68.2 52 107.7 61.7 67.3 16.4 138.2.6 192.9-43.1 4.1-3.3 11.6-9.8 16.6-14.6l9.1-8.6 10.4 6.1 80.9 46.8 46.9 27.5c2.1 2-10.8 17.5-33.4 40-33.4 33.4-63.7 55.1-104 74.6-39.6 19-79 30.3-126.5 36.1-14 1.7-65.9 1.7-80.5 0-90.8-10.8-170.1-49.2-232.7-112.8-42.7-43.5-71.3-89.7-90.8-146.9-26.6-78.3-26.7-165.7-.2-244.5C345.5 500.3 434.7 410.7 548 372.1c25.6-8.7 57.8-15.8 83-18.2l14.5-1.4c10.4-1 47.5-.5 61.6.8zm348.4 254.5v32h32 32v-32-32h32 32v32 32h32 32v32 32h-32-32v32 32h32 32v32 32h-32-32v32 32h-32-32v-32-32h-32-32v32 32h-32-32v-32-32h-32-32v-32-32h32 32v-32-32h-32-32v-32-32h32 32v-32-32h32 32v32zm0 128v32h32 32v-32-32h-32-32v32z"
                />
            </svg>
        }
        titleLabel="C#"
        listItems={['Developing games using Unity']}
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
                {cSharpSkillsSection}
            </>
        );
    }

    const columnClassName = 'skills-panel-column';

    return (
        <div className="skills-panel-columns">
            <div className={columnClassName}>
                {jsSkillsSection}
                {cSharpSkillsSection}
            </div>
            <div className={columnClassName}>
                {htmlSkillsSection}
                {javaSkillsSection}
            </div>
        </div>
    );
}

export default SkillsPanel;
