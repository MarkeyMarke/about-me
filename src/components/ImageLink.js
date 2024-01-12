import PropTypes from 'prop-types';
import './__styles__/ImageLink.scss';

const propTypes = {
    href: PropTypes.string.isRequired,
    image: PropTypes.node.isRequired,
    imageAltText: PropTypes.string.isRequired,
};

function ImageLink({ href, image, imageAltText }) {
    return (
        <div className="image-link-border">
            <a href={href} rel="noopener noreferrer" target="_blank">
                <div className="image-link-overlay">More info</div>
                <img src={image} alt={imageAltText} />
            </a>
        </div>
    );
}

ImageLink.propTypes = propTypes;
export default ImageLink;
