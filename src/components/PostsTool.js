import React from "react";
import "./PostsTool.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faCog, faBars, faThLarge } from "@fortawesome/free-solid-svg-icons";

const PostsTool = (props) => {
  return (
    <div className="PostsTool">
      <div className="Header">
        <h3 className="Title">Bài viết</h3>
        <button className="Button">
          <FontAwesomeIcon className="ButtonIcon" icon={faSlidersH} /> Bộ lọc
        </button>
        <button className="Button">
          <FontAwesomeIcon className="ButtonIcon" icon={faCog} /> Quản lý
          bài viết
        </button>
      </div>
      <div className="Content">
        <button className="Button ButtonActive">
        <FontAwesomeIcon className="ButtonIcon" icon={faBars} /> Xem theo
          danh sách
        </button>
        <button className="Button">
        <FontAwesomeIcon className="ButtonIcon" icon={faThLarge} /> Chế độ
          xem lưới
        </button>
      </div>
    </div>
  );
};

export default PostsTool;
