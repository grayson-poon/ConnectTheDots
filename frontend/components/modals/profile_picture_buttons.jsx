import React from "react";
import { CAMERA_ICON, DELETE_BUTTON, CHECK_MARK_ICON } from "../../util/images_and_icons_util";

const EditButtons = ({ handleFile, removeFile, handleSubmit }) => {
  return (
    <div className="edit-buttons">
      <div id="upload-button">
        <label>
          <img src={CAMERA_ICON} />
          <input type="file" onChange={handleFile} accept="image/*" />
          Upload photo
        </label>
      </div>

      <div id="delete">
        <button onClick={removeFile}>
          <img src={DELETE_BUTTON} />
          <div>Remove photo</div>
        </button>
      </div>

      <div id="submit-button-check">
        <button onClick={handleSubmit}>
          <img src={CHECK_MARK_ICON} />
          <div>Update photo</div>
        </button>
      </div>
    </div>
  );
};

export default EditButtons;