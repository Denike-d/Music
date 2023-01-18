import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo"></div>
      </div>
      {/* <input /> */}

      <div className="menu">
        <ul className="nav-items">
          <p>Menu</p>
          <li className="nav-item">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1667 10.4917V4.25834C20.1667 2.88334 19.58 2.33334 18.1225 2.33334H14.4192C12.9617 2.33334 12.375 2.88334 12.375 4.25834V10.4917C12.375 11.8667 12.9617 12.4167 14.4192 12.4167H18.1225C19.58 12.4167 20.1667 11.8667 20.1667 10.4917Z"
                stroke="#3FA9F5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.1667 18.7417V17.0917C20.1667 15.7167 19.58 15.1667 18.1225 15.1667H14.4192C12.9617 15.1667 12.375 15.7167 12.375 17.0917V18.7417C12.375 20.1167 12.9617 20.6667 14.4192 20.6667H18.1225C19.58 20.6667 20.1667 20.1167 20.1667 18.7417Z"
                stroke="#3FA9F5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.62498 12.5083V18.7417C9.62498 20.1167 9.03831 20.6667 7.58081 20.6667H3.87748C2.41998 20.6667 1.83331 20.1167 1.83331 18.7417V12.5083C1.83331 11.1333 2.41998 10.5833 3.87748 10.5833H7.58081C9.03831 10.5833 9.62498 11.1333 9.62498 12.5083Z"
                stroke="#3FA9F5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.62498 4.25834V5.90834C9.62498 7.28334 9.03831 7.83334 7.58081 7.83334H3.87748C2.41998 7.83334 1.83331 7.28334 1.83331 5.90834V4.25834C1.83331 2.88334 2.41998 2.33334 3.87748 2.33334H7.58081C9.03831 2.33334 9.62498 2.88334 9.62498 4.25834Z"
                stroke="#3FA9F5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <Link to="/">Dashboard</Link>
          </li>

          <li className="nav-item">
            <svg
              width="22"
              height="23"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <Link>Search</Link>
          </li>

          <li className="nav-item">
            <svg
              width="22"
              height="23"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
              />
            </svg>

            <Link>Playlists</Link>
          </li>

          <li className="nav-item">
            <svg
              width="22"
              height="23"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
              />
            </svg>
            <Link>Albums</Link>
          </li>
        </ul>
        <div className="general">
          <ul className="nav-items">
            <p>General</p>
            <li className="nav-item">
              <svg
                width="22"
                height="23"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <Link>Settings</Link>
            </li>

            <li className="nav-item">
              <svg
                width="22"
                height="23"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>

              <Link>Log Out</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
