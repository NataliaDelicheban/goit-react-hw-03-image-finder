import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = (src, alt) => {
    return (
        <ul className={css.ImageGallery}>
                    <ImageGalleryItem/>
        </ul>
    );
}

ImageGallery.propTypes = {
            alt: PropTypes.string,
            src: PropTypes.string,
}