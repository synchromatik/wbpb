import React from 'react';
import { useStateValue } from '../state';
import SingleGalleryImage from './SingleGalleryImage';

function Gallery() {
  const [{ images }] = useStateValue();
  return (
    <>
      <div className="galery">
        {images.map((image) => (
          <SingleGalleryImage
            key={image.id}
            id={image.id}
            src={image.src}
            url={image.url}
            alt={image.name}
          />
        ))}
      </div>
    </>
  );
}

export default Gallery;
