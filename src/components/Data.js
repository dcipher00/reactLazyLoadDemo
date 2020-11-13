/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo } from "react";
import "./Data.css";

export const Data = memo(function Data({ data }) {
  return data ? (
    <div className="list">
      <img
        style={{ width: 80, height: 80 }}
        src={
          data.image_uri != null
            ? data.image_uri
            : `https://react.semantic-ui.com/images/wireframe/image.png`
        }
        alt="..."
      />
      <div className="details">
        <h2>{data.display_name}</h2>
        <p>
          <b>Category:</b> {data.category_name}
        </p>
        <p>
          <b>Description:</b>{" "}
          {data.description != null ? data.description : "Not Provided"}
        </p>
      </div>
    </div>
  ) : null;
});
