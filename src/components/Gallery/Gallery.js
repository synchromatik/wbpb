import React, { useEffect } from 'react';
import axios from 'axios';
import { useStateValue } from '../state';
import SingleGalleryImage from './SingleGalleryImage';
import Modal from './Modal';
import Logo from './Logo';

function Gallery() {
  const [{
    modal, images,
  }, dispatch] = useStateValue();
  const CLAPI = 'http://res.cloudinary.com/pickled-brain/image/list/live.json';
  const CLOUDURL = 'https://res.cloudinary.com/pickled-brain/image/upload/';
  useEffect(() => {
    axios
      .get((CLAPI), { crossdomain: true })
      .then((response) => {
        dispatch({
          type: 'loadImages',
          newImages: response.data.resources,
        });
      })
      .catch((err) => {
        throw (err);
      });
  }, []);

  return (
    <>
      <div className="galery">
        <Logo />
        {images.map((image, index) => (
          <SingleGalleryImage
            key={index}
            id={index}
            url={`${CLOUDURL}${'w_500,h_500,c_crop'}/${image.public_id}.${image.format}`}
            fullUrl={`${CLOUDURL}${image.public_id}.${image.format}`}
            index={index}
          />
        ))}
        {modal.showModal
          ? (
            <Modal />
          ) : null}
      </div>
    </>
  );
}

export default Gallery;
