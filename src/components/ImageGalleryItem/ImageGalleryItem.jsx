import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({largeImageURL, tags}) => {
    return (
        <li className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItemImage} src={largeImageURL} alt={tags} />
        </li>
    );
}

ImageGalleryItem.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
}