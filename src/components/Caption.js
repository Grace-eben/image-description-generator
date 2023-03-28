import React from "react";
import { GoInfo } from "react-icons/go";
import "../css/UploadImage.css";

export default function Caption() {
 
  return (
    <div className="caption">
      <div>
        <button className="pill-button">
          <GoInfo style={{ marginRight: "10px", fontWeight: "bold" }} />
          Generated caption
        </button>
      </div>
      <textarea
        className="caption-textarea"
        placeholder="View your generated caption here..."
        cols="30"
        rows="5"
      ></textarea>
    </div>
  );
}
