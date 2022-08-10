import React, { Component } from "react";
import api from '../service/image-service';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    isVisible: false,
    error: null,
    isLoading: false,
    isOpen: false,
    modalImage: '',
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });

      api.getImages(query, page)
        .then(data => {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.photos],
            page: data.page,
            isVisible:
              data.page < Math.ceil(data.total_results / data.per_page),
          }));
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleClick = () => {
    // console.log('click');
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onSubmit = data => {
    this.setState({
      images: [],
      query: data,
      page: 1,
    });
  };

  openModal = modalImage => {
    this.setState({
      isOpen: true,
      modalImage: modalImage,
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { images, isVisible, error, isLoading, isOpen, modalImage } = this.state;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.onSubmit} />

        {images.length === 0 && !error && (
          alert `Sorry, there are not images!`
        )}

        {error && (
          alert `Something went wrong - ${error}`
        )}

        <ImageGallery>
        {images.map(({ id, alt, src }) => {
                return (
                    <ImageGalleryItem key={id}>
                        <img
                            src={src.webformatURL}
                            alt={alt}
                            onClick={() => this.openModal(src.largeImageURL)}
                        />
                    </ImageGalleryItem>
                )
            } 
            )}
        </ImageGallery>

        {isVisible && (
          <Button disabled={isLoading} onClick={this.handleClick}>
            {isLoading ?
              <Audio
                height = "80"
                width = "80"
                radius = "9"
                color = 'green'
                ariaLabel = 'three-dots-loading'     
                wrapperStyle
                wrapperClass
              />
              : 'Load More'}
          </Button>
        )}

        {isOpen && (
          <Modal onClose={this.closeModal}>
            <img src={modalImage} alt="modal img" />
          </Modal>
        )}
      </div>
    );
  }
}