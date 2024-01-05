import PropTypes from 'prop-types';
import './styles/PageSection.scss';

const propTypes = {
    children: PropTypes.node.isRequired,
    scrollSpyId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sectionRef: PropTypes.shape({}).isRequired,
};

function PageSection({ children, title, scrollSpyId, sectionRef }) {
    return (
        <section id={scrollSpyId} className="page-section" ref={sectionRef}>
            <h1>{title}</h1>
            <div className="page-section-content">{children}</div>
        </section>
    );
}

PageSection.propTypes = propTypes;

export default PageSection;
