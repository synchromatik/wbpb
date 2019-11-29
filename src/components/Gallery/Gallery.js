import React, { useEffect } from 'react';
import axios from 'axios';
import { useStateValue } from '../state';
import SingleGalleryImage from './SingleGalleryImage';
import Logo from './Logo';

function Gallery() {
  const [{ images }, dispatch] = useStateValue();
  const CLAPI = 'http://res.cloudinary.com/pickled-brain/image/list/live.json';
  const CLOUDURL = 'https://res.cloudinary.com/pickled-brain/image/upload/w_500,h_500,c_crop/';

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
        {images.map((image) => (
          <SingleGalleryImage
            key={image.public_id}
            id={image.created_at}
            url={`${CLOUDURL}${image.public_id}.${image.format}`}
          />
        ))}
      </div>
    </>
  );
}

export default Gallery;
