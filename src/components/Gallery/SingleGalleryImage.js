import React from 'react';
import { SimpleImg } from 'react-simple-img';

function SingleGalleryImage(props) {
  const { desktopUrl, descriptionEN } = props;
  return (
    <div className="item">
      {/* <button
        type="button"
        onClick={() => dispatch({
          type: 'updateModal',
          newModal: { showModal: true },
          newImageIndex: index,
        })}
        aria-label="SampleTattooWorks"
      > */}
      <SimpleImg
        height={320}
        width={320}
        applyAspectRatio
        src={desktopUrl}
        alt={descriptionEN}
      />
      {/* </button> */}
    </div>
  );
}

export default SingleGalleryImage;
