import React from "react";
import "./Footer.css";
import Loader from "react-loader-spinner";

export default function Footer(props) {
  return (
    <div className="load-butt" onClick={props.loadMore}>
      <h2>Click to Load More</h2>
      {props.footerloading ? (
        <Loader type="Circles" color="#00BFFF" height={160} width={160} />
      ) : null}
      <p>Showing: {props.newCount} Items</p>
    </div>
  );
}
