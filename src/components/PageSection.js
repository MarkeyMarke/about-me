import PropTypes from 'prop-types';
import './styles/PageSection.scss';

const propTypes = {
    children: PropTypes.node.isRequired,
    scrollSpyId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

function PageSection({ children, title, scrollSpyId }) {
    return (
        <section id={scrollSpyId} className="page-section">
            <h1>{title}</h1>
            {children}
        </section>
    );
}

PageSection.propTypes = propTypes;

export default PageSection;
