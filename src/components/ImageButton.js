import PropTypes from 'prop-types';
import './__styles__/ImageButton.scss';

const propTypes = {
    href: PropTypes.string.isRequired,
    image: PropTypes.node.isRequired,
    imageAltText: PropTypes.string.isRequired,
};

function ImageButton({ href, image, imageAltText }) {
    return (
        <div className="image-button-border">
            <a href={href} rel="noopener noreferrer" target="_blank">
                <div className="image-button-overlay">More info</div>
                <img src={image} alt={imageAltText} />
            </a>
        </div>
    );
}

ImageButton.propTypes = propTypes;
export default ImageButton;
