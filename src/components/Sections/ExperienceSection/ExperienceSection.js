import PropTypes from 'prop-types';
import PageSection from '../../PageSection';
import SectionData from '../../../constants/SectionData';
import Tab from '../../Tab';
import './__styles__/ExperienceSection.scss';

const propTypes = {
    sectionRef: PropTypes.shape({}).isRequired,
};

const tabData = [
    {
        id: 'skills',
        label: 'Skills',
        content: <div>Skills Content Test</div>,
        tabPanelClassName: 'skills-tab-panel',
    },
    {
        id: 'work',
        label: 'Work',
        content: <div>Work Content Test</div>,
        tabPanelClassName: 'work-tab-panel',
    },
    {
        id: 'education',
        label: 'Education',
        content: <div>Education Content Test</div>,
        tabPanelClassName: 'education-tab-panel',
    },
];

function ExperienceSection({ sectionRef }) {
    return (
        <PageSection
            title={SectionData.EXPERIENCE.label}
            scrollSpyId={SectionData.EXPERIENCE.id}
            sectionRef={sectionRef}
            className="experience-page-section"
        >
            <Tab tabData={tabData} />
        </PageSection>
    );
}

ExperienceSection.propTypes = propTypes;
export default ExperienceSection;
