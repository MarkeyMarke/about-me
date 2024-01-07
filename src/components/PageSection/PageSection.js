import PropTypes from 'prop-types';
import cn from 'classnames';
import './__styles__/PageSection.scss';

const propTypes = {
    children: PropTypes.node.isRequired,
    scrollSpyId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sectionRef: PropTypes.shape({}).isRequired,
    className: PropTypes.string,
};

const defaultProps = {
    className: '',
};

function PageSection({ children, title, scrollSpyId, sectionRef, className }) {
    const sectionClassName = cn({
        'page-section': true,
        [className]: !!className,
    });
    return (
        <section className={sectionClassName} ref={sectionRef}>
            <span className="page-section-scroll-spy-marker" id={scrollSpyId} />
            <h1 className="page-section-title">{title}</h1>
            <div className="page-section-content">{children}</div>
        </section>
    );
}

PageSection.propTypes = propTypes;
PageSection.defaultProps = defaultProps;
export default PageSection;
