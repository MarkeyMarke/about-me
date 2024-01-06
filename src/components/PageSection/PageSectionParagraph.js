import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};

const defaultProps = {
    title: '',
};

function PageSectionParagraph({ children, title }) {
    return (
        <>
            {title && <h1 className="page-section-paragraph-title">{title}</h1>}
            <div className="page-section-paragraph">
                <p>{children}</p>
            </div>
        </>
    );
}

PageSectionParagraph.propTypes = propTypes;
PageSectionParagraph.defaultProps = defaultProps;
export default PageSectionParagraph;
