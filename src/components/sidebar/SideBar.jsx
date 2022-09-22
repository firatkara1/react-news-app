import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">Kategoriler</span>
        <ul className="siderbar-list">
          <li className="sidebar-list-item">
            <Link to="/business">Ekonomi</Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/entertainment">Magazin</Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/general">Güncel</Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/health">Sağlık</Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/science">Bilim</Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/sports">Spor</Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/technology">Teknoloji</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
