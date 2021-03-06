import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItemStyles.scss";

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
