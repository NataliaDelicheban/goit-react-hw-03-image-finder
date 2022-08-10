import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
    state = {
        query: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({
            query: '',
        })
    }


        render() {
            return (
                <header className={css.Searchbar} onSubmit={this.handleSubmit}>
                    <form className={css.SearchForm}>
                        <button type="submit" className={css.SearchFormButton}>
                            <span className={css.SearchFormButtonLabel}>Search</span>
                        </button>

                        <input
                            className={css.SearchFormInput}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                        />
                    </form>
                </header>
            );
        }
    }

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};