import React from 'react';

function SingleGalleryImage(props) {
  const { url, alt } = props;
  return (
    <div className="item">
      <img
        src={url}
        className="image"
        alt={alt}
        // onClick={() => dispatch({
        //   type: 'updateModal',
        //   newModal: { showModal: true },
        //   newIndex: props.id
        // })}
      />
    </div>
  );
}

export default SingleGalleryImage;
