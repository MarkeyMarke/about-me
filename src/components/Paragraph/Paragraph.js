import PropTypes from 'prop-types';
import './__styles__/Paragraph.scss';

const propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};

const defaultProps = {
    title: '',
};

function Paragraph({ children, title }) {
    return (
        <>
            {title && <h1 className="paragraph-title">{title}</h1>}
            <div className="paragraph">
                <p>{children}</p>
            </div>
        </>
    );
}

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;
export default Paragraph;
