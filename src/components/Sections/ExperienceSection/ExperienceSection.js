import PropTypes from 'prop-types';
import PageSection from '../../PageSection';
import sectionData from '../../../constants/sectionData';
import Tab from '../../Tab';
import SkillsPanel from './SkillsPanel';
import WorkPanel from './WorkPanel';
import EducationPanel from './EducationPanel';

const propTypes = {
    sectionRef: PropTypes.shape({}).isRequired,
};

const tabData = [
    {
        id: 'skills',
        label: 'Skills',
        content: <SkillsPanel />,
        tabPanelClassName: 'skills-tab-panel',
    },
    {
        id: 'work',
        label: 'Work',
        content: <WorkPanel />,
        tabPanelClassName: 'work-tab-panel',
    },
    {
        id: 'education',
        label: 'Education',
        content: <EducationPanel />,
        tabPanelClassName: 'education-tab-panel',
    },
];

function ExperienceSection({ sectionRef }) {
    return (
        <PageSection
            title={sectionData.EXPERIENCE.label}
            scrollSpyId={sectionData.EXPERIENCE.id}
            sectionRef={sectionRef}
            className="experience-page-section"
        >
            <Tab tabData={tabData} />
        </PageSection>
    );
}

ExperienceSection.propTypes = propTypes;
export default ExperienceSection;
