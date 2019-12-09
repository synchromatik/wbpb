import React, { useEffect } from 'react';
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
    fetch(CLAPI)
      .then((response) => response.json())
      .then((data) => dispatch({
        type: 'loadImages',
        newImages: data.resources,
      }))
      .catch((error) => {
        throw (error);
      });
  }, []);
  return (
    <>
      <div className="galery">
        <Logo />
        {images.map((image, index) => (
          <SingleGalleryImage
            key={index}
            desktopUrl={`${CLOUDURL}${'w_320,h_320,c_crop'}/${image.public_id}.${image.format}`}
            index={index}
            descriptionEN={image.context ? image.context.custom.description : 'Default'}
            descriptionSR={image.context ? image.context.custom.opis : 'opis'}
          />
        ))}
        {modal.showModal
          ? (
            <Modal
              descriptionEN={images.context ? images.context.custom.description : 'Default'}
              descriptionSR={images.context ? images.context.custom.opis : 'opis'}
            />
          ) : null}
      </div>
    </>
  );
}

export default Gallery;
