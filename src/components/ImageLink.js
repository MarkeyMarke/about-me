import PropTypes from 'prop-types';
import './__styles__/ImageLink.scss';

const propTypes = {
    href: PropTypes.string.isRequired,
    image: PropTypes.node.isRequired,
    imageAltText: PropTypes.string.isRequired,
    subText: PropTypes.string,
};

const defaultProps = {
    subText: '',
};

function ImageLink({ href, image, imageAltText, subText }) {
    return (
        <div className="image-link-container">
            <div className="image-link-border">
                <a href={href} rel="noopener noreferrer" target="_blank">
                    <div className="image-link-overlay">More info</div>
                    <img src={image} alt={imageAltText} />
                </a>
            </div>
            {subText && <span>{subText}</span>}
        </div>
    );
}

ImageLink.propTypes = propTypes;
ImageLink.defaultProps = defaultProps;
export default ImageLink;
