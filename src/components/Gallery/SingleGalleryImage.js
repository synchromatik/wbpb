import React from 'react';
import { useStateValue } from '../state';

function SingleGalleryImage(props) {
  const { url, alt, index } = props;
  const [, dispatch] = useStateValue();
  return (
    <div className="item">
      <button
        type="button"
        onClick={() => dispatch({
          type: 'updateModal',
          newModal: { showModal: true },
          newImageIndex: index,
        })}
      >
        <img
          src={url}
          className="image"
          alt={alt}
          id={index}
        />
      </button>
    </div>
  );
}

export default SingleGalleryImage;
