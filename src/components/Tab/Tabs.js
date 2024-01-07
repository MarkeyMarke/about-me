import PropTypes from 'prop-types';
import { useState } from 'react';
import Tab from './Tab';
import TabPanel from './TabPanel';

const propTypes = {
    tabData: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
            tabClassName: PropTypes.string,
            tabPanelClassName: PropTypes.string,
        }),
    ).isRequired,
    className: PropTypes.string,
};

const defaultProps = {
    className: undefined,
};

function Tabs({ tabData, className }) {
    const [selectedTab, setSelectedTab] = useState(tabData[0].id);

    const handleSelectTab = (e, id) => {
        setSelectedTab(id);
    };

    return (
        <>
            <div role="tablist" className={className}>
                {tabData.map(({ id, label, tabClassName }) => (
                    <Tab
                        label={label}
                        id={id}
                        selected={selectedTab === id}
                        key={id}
                        onClick={handleSelectTab}
                        className={tabClassName}
                    />
                ))}
            </div>
            {tabData.map(({ id, content, tabPanelClassName }) => (
                <TabPanel
                    id={id}
                    className={tabPanelClassName}
                    key={id}
                    selected={selectedTab === id}
                >
                    {content}
                </TabPanel>
            ))}
        </>
    );
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
export default Tabs;
