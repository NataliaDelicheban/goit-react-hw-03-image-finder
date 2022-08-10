import React from 'react';
// import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = () => {
    return (
        <button type='button' className={css.Button}>Load more</button>
    );
}