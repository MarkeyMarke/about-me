import EducationPanelSection from './EducationPanelSection';
import mhsLogo from '../../../images/mhsLogo.jpg';
import sjsuLogo from '../../../images/sjsuLogo.png';

const SJSU_DESC_ITEMS = [
    {
        id: 'magna',
        term: 'Magna Cum Laude',
        description:
            'A certificate title granted to SJSU students who have a cumulative GPA of 3.7 or higher',
    },
    {
        id: 'president-scholar',
        term: `President's Scholar`,
        description:
            'An honor granted to SJSU students who had earned a 4.0 GPA for at least two contiguous semesters',
    },
    {
        id: 'gamedev',
        term: 'SJSU Game Dev',
        description:
            'A club where SJSU students pursue video-game development by creating a semester project',
    },
    {
        id: 'tbp',
        term: 'Tau Beta Pi',
        description:
            'An honor society for SJSU engineering students who placed at the top 1/8th (or 1/5th) of their junior (or senior) year',
    },
];

const MHS_DESC_ITEMS = [
    {
        id: 'dba',
        term: 'Digital Business Academy',
        description:
            'An exclusive program in MHS where students are formally taught in several software disciplines for the digital industry',
    },
    {
        id: 'track-and-field',
        term: 'MHS Track & Field',
        description:
            'A varsity team member for the high jump event, achieving record heights of up to five feet and two inches',
    },
    {
        id: 'mvdb',
        term: 'Dragon Boat Club',
        description:
            'A medal winning team for a water-sport racing competition taking place among several lakes throughout California, USA',
    },
    {
        id: 'kdt',
        term: 'Korean Dance Team',
        description:
            'A Korean-pop dance team performing for several shows in MHS and the local area of San Jose, CA',
    },
];

function EducationPanel() {
    return (
        <>
            <EducationPanelSection
                image={sjsuLogo}
                imageAltText="San Jose State University logo"
                titleLabel="San Jose State University"
                href="https://www.sjsu.edu/"
                dateText="Class of 2020"
                gpa={3.73}
                descriptionItems={SJSU_DESC_ITEMS}
            />
            <EducationPanelSection
                image={mhsLogo}
                imageAltText="Milpitas High School logo"
                titleLabel="Milpitas High School"
                href="https://mhs.musd.org/"
                dateText="Class of 2015"
                gpa={3.78}
                descriptionItems={MHS_DESC_ITEMS}
            />
        </>
    );
}

export default EducationPanel;
