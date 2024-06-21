import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <>
      <header className="header">
        <div className="header__container container">
          <div className="headerBox">
            <Link to="/" className="header__logo">
              U
            </Link>
            <ul className="nav__list">
              <li className="list__item">
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li className="list__item">
                <Link to="About" className="link">
                  About
                </Link>
              </li>
              <li className="list__item">
                <Link to="Contact" className="link">
                  Contact
                </Link>
              </li>
              <li
                onClick={() => {
                  setDropDown(!dropDown);
                }}
                className="list__item__category"
              >
                <span
                  onClick={() => {
                    setDropDown(!dropDown);
                  }}
                  className="link"
                >
                  Tools
                  <span className="link__SVG">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <rect x={0} fill="none" width={24} height={24} />
                        <g>
                          <path d="M7 10l5 5 5-5" />
                        </g>
                      </g>
                    </svg>
                  </span>
                </span>
                <ul className={dropDown ? `category__list` : "hidden"}>
                  <li className="category__item">
                    <Link to="AgeCalculator" className="link">
                      Age calculator
                    </Link>
                  </li>
                  <li>
                    <Link to="WordCounter" className="link">
                      Word counter
                    </Link>
                  </li>
                  <li>
                    <Link to="Password" className="link">
                      Password Generator
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a
            target="_blank"
            className="telegram"
            href="https://t.me/xyz_call_islomjon_bot"
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <circle
                  cx={16}
                  cy={16}
                  r={14}
                  fill="url(#paint0_linear_87_7225)"
                />
                <path
                  d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_87_7225"
                    x1={16}
                    y1={2}
                    x2={16}
                    y2={30}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#37BBFE" />
                    <stop offset={1} stopColor="#007DBB" />
                  </linearGradient>
                </defs>
              </g>
            </svg>
          </a>
        </div>
      </header>
      <div
        onClick={() => setDropDown(false)}
        style={
          dropDown
            ? {
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "1",
              }
            : {}
        }
      ></div>
    </>
  );
}