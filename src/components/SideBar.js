import { SideBarData } from "../data/SideBarData";
import { useState } from "react";

const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen ] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <>
      <button className="hamburger-icon" onClick={toggleSideBar}>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="black"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
      </button>
      {isSideBarOpen && (
        <div className="sidebar">
          <ul className="sidebarList">
            <h2>Admin Dashboard</h2>
            {SideBarData.map((val, key) => {
              return (
                <li
                  key={key}
                  className="row"
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default SideBar;
