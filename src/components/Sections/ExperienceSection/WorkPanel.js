import veevaSystemsLogo from '../../../images/veevaSystemsLogo.jpg';
import peerConnections from '../../../images/peerConnectionsLogo.png';
import WorkPanelSection from './WorkPanelSection';
import './__styles__/WorkPanel.scss';

function WorkPanel() {
    return (
        <>
            <WorkPanelSection
                image={veevaSystemsLogo}
                imageAltText="Veeva Systems logo"
                titleText="Veeva Systems"
                href="https://www.veeva.com/"
                companyRole="Software Engineer"
                date="August 2020 - Present"
                companyDescription="A company leading the production of cloud-based software for the
                global life sciences industry"
                listItems={[
                    'Develop and maintain reusable UI components for other teams in the company',
                    'Design and integrate with network API sent and received from servers',
                    'Conduct and receive code reviews from other developers on GitLab',
                    'Coordinate stories and defects with team members using Jira',
                    'Review and incorporate UI designs from UX designers using Figma',
                ]}
            />
            <WorkPanelSection
                image={peerConnections}
                imageAltText="Peer Connections logo"
                titleText="Peer Connections"
                href="https://www.sjsu.edu/peerconnections/index.php"
                companyRole="Supplemental Instruction Lead"
                date="January 2018 - May 2019"
                companyDescription="A student resource center under one of San Jose State University's academic programs"
                listItems={[
                    'Facilitate workshops that teaches students the principles of programming in Java',
                    'Train other supplemental instructors who recently joined the program',
                    'Manage a program where supplemental instructors conduct online seminars',
                ]}
            />
        </>
    );
}

export default WorkPanel;
