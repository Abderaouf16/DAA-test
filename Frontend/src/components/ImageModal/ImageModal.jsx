import React from "react";
import imageModal from "../CSS/ImageModal.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ImageModal({ imageUrl, toggleModal }) {
  return (
    <div className="image-modal flex">
      <div className="image-modal-content">
        <img src={imageUrl} alt="" />
        {/* <button onClick={toggleModal} className='bg-white text-black p-2 rounded-lg'>Close</button> */}
        <FontAwesomeIcon
          className="  text-2xl exite  p-2 border-2  "
          icon={faTimes}
          onClick={toggleModal}
        />
      </div>
    </div>
  );
}
