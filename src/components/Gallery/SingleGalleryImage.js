import React from 'react';
import { SimpleImg } from 'react-simple-img';
import { useStateValue } from '../state';

function SingleGalleryImage(props) {
  const { desktopUrl, descriptionEN, index } = props;
  const [, dispatch] = useStateValue();
  return (
    <div className="item">
      <SimpleImg
        height={320}
        width={320}
        applyAspectRatio
        src={desktopUrl}
        alt={descriptionEN}
        imgStyle={{ zIndex: '1' }}
        onClick={() => dispatch({
          type: 'updateModal',
          newModal: { showModal: true },
          newImageIndex: index,
        })}
      />
    </div>
  );
}

export default SingleGalleryImage;
