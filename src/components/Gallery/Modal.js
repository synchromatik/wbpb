import React from 'react';
import { useStateValue } from '../state';

function Modal() {
  const [{ imageIndex, modal, images }, dispatch] = useStateValue();
  const CLOUDURL = 'https://res.cloudinary.com/pickled-brain/image/upload';
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      console.log('keypressed enter');
    }
  }
  function TogglePrev() {
    let setActive;
    if (imageIndex === 0) {
      setActive = images.length - 1;
    } else {
      setActive = imageIndex - 1;
    }
    dispatch({
      type: 'updateActiveImage',
      newImageIndex: setActive,
    });
  }
  function ToggleNext() {
    let setActive;
    if (imageIndex === images.length - 1) {
      setActive = 0;
    } else {
      setActive = imageIndex + 1;
    }
    console.log(setActive);
    dispatch({
      type: 'updateActiveImage',
      newImageIndex: setActive,
    });
  }
  return (
    <>
      <div
        className={modal.showModal ? 'modal__wrapper modal__wrapper--active' : 'modal__wrapper--active'}
      >
        <div
          className="modal__backdrop"
          role="button"
          aria-label="Close Modal"
          tabIndex="0"
          onClick={() => dispatch({
            type: 'updateModal',
            newModal: { showModal: false },
          })}
          onKeyPress={handleKeyPress}
        />
        <div className="modal__content">
          <button
            type="button"
            onClick={TogglePrev}
          >
            Prev
          </button>
          <button
            type="button"
            onClick={ToggleNext}
          >
            Next
          </button>
          <img
            src={`${CLOUDURL}/if_iw_gt_1000,w_800,c_fit/${images[imageIndex].public_id}.${images[imageIndex].format}`}
            alt={images[imageIndex].context ? images[imageIndex].context.custom.description : 'Default'}
          />
        </div>
      </div>
    </>
  );
}

export default Modal;
