import {Link} from "react-router-dom"

export default function HomePage() {
  return (
    <>
      <section className="home">
        <div className="home__container container">
          <h1 className="home__title">Useful Tools</h1>
          <div className="home__box">
            <h3 className="home__title2">
              Hi! Dear user we are glad that you are using our Useful Tools
              website. Through this site, we offer you the following features:
            </h3>
            <div className="tools__list">
              <Link to='Password' className="tools__item">
                <div className="tools__icon">
                  <svg
                    fill="#000000"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <g id="Password">
                        <path d="M391,233.9478H121a45.1323,45.1323,0,0,0-45,45v162a45.1323,45.1323,0,0,0,45,45H391a45.1323,45.1323,0,0,0,45-45v-162A45.1323,45.1323,0,0,0,391,233.9478ZM184.123,369.3794a9.8954,9.8954,0,1,1-9.8964,17.1387l-16.33-9.4287v18.8593a9.8965,9.8965,0,0,1-19.793,0V377.0894l-16.33,9.4287a9.8954,9.8954,0,0,1-9.8964-17.1387l16.3344-9.4307-16.3344-9.4306a9.8954,9.8954,0,0,1,9.8964-17.1387l16.33,9.4282V323.9487a9.8965,9.8965,0,0,1,19.793,0v18.8589l16.33-9.4282a9.8954,9.8954,0,0,1,9.8964,17.1387l-16.3344,9.4306Zm108,0a9.8954,9.8954,0,1,1-9.8964,17.1387l-16.33-9.4287v18.8593a9.8965,9.8965,0,0,1-19.793,0V377.0894l-16.33,9.4287a9.8954,9.8954,0,0,1-9.8964-17.1387l16.3344-9.4307-16.3344-9.4306a9.8954,9.8954,0,0,1,9.8964-17.1387l16.33,9.4282V323.9487a9.8965,9.8965,0,0,1,19.793,0v18.8589l16.33-9.4282a9.8954,9.8954,0,0,1,9.8964,17.1387l-16.3344,9.4306Zm108,0a9.8954,9.8954,0,1,1-9.8964,17.1387l-16.33-9.4287v18.8593a9.8965,9.8965,0,0,1-19.793,0V377.0894l-16.33,9.4287a9.8954,9.8954,0,0,1-9.8964-17.1387l16.3344-9.4307-16.3344-9.4306a9.8954,9.8954,0,0,1,9.8964-17.1387l16.33,9.4282V323.9487a9.8965,9.8965,0,0,1,19.793,0v18.8589l16.33-9.4282a9.8954,9.8954,0,0,1,9.8964,17.1387l-16.3344,9.4306Z" />
                        <path d="M157.8965,143.9487a98.1035,98.1035,0,1,1,196.207,0V214.147h19.793V143.9487a117.8965,117.8965,0,0,0-235.793,0V214.147h19.793Z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="tools__info">
                  - Creating strong and secure passwords
                </span>
              </Link>
              <Link to="AgeCalculator" className="tools__item">
                <div className="tools__icon">
                  <svg
                    viewBox="0 0 24 24"
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
                      <path
                        d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 7.57996V8.57996C16.5 9.39996 15.83 10.08 15 10.08H9C8.18 10.08 7.5 9.40996 7.5 8.57996V7.57996C7.5 6.75996 8.17 6.07996 9 6.07996H15C15.83 6.07996 16.5 6.74996 16.5 7.57996Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.13612 14H8.14767"
                        stroke="#292D32"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9952 14H12.0068"
                        stroke="#292D32"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.8544 14H15.8659"
                        stroke="#292D32"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.13612 17.5H8.14767"
                        stroke="#292D32"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9952 17.5H12.0068"
                        stroke="#292D32"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.8544 17.5H15.8659"
                        stroke="#292D32"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <span className="tools__info">- Calculating your age</span>
              </Link>
              <Link to='WordCounter' className="tools__item">
                <div className="tools__icon">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512.001 512.001"
                    xmlSpace="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        style={{ fill: "#694B4B" }}
                        d="M88.222,159.632c-82.142,0-73.034,99.89-72.659,172.277c0.014,2.734,1.446,5.198,3.788,6.61 c9.102,5.487,34.1,18.316,68.871,18.316s59.769-12.829,68.871-18.316c2.341-1.412,3.774-3.876,3.788-6.61 C161.256,259.522,170.364,159.632,88.222,159.632z"
                      />
                      <path
                        style={{ fill: "#5A4146" }}
                        d="M82.93,159.838c-76.395,4.283-67.733,101.295-67.367,172.071c0.014,2.734,1.446,5.199,3.788,6.61 c9.102,5.487,34.1,18.316,68.871,18.316l20.759-145.308"
                      />
                      <path
                        style={{ fill: "#694B4B" }}
                        d="M88.222,159.632c-46.706,0-49.949,56.436-49.949,56.436c26.921-4.541,43.463,6.811,70.708-4.541 L88.222,356.835c34.772,0,59.769-12.829,68.871-18.316c2.341-1.412,3.774-3.876,3.788-6.61 C161.256,259.522,170.364,159.632,88.222,159.632z"
                      />
                      <path
                        style={{ fill: "#785550" }}
                        d="M160.881,331.909c0.322-62.201,7.037-144.651-43.183-166.639c-0.876,4.55-2.463,17.253,1.661,25.498 c10.379,20.759,20.759,20.759,31.137,36.327c10.379,57.085-19.831,117.674-29.865,125.923l0,0 c17.778-4.228,30.522-10.919,36.462-14.499C159.434,337.108,160.867,334.643,160.881,331.909z"
                      />
                      <path
                        style={{ fill: "#E6AF78" }}
                        d="M166.864,347.653l-46.307-19.294c-3.867-1.611-6.387-5.39-6.387-9.581v-12.541H62.275v12.541 c0,4.191-2.52,7.97-6.387,9.581L9.581,347.653C3.779,350.071,0,355.74,0,362.025v20.759c0,5.732,4.647,10.379,10.379,10.379h155.686 c5.732,0,10.379-4.647,10.379-10.379v-20.759C176.445,355.74,172.666,350.071,166.864,347.653z"
                      />
                      <path
                        style={{ fill: "#EFF2FA" }}
                        d="M166.864,347.653l-44.773-18.656l-33.869,14.618l-33.869-14.617L9.581,347.654 C3.779,350.071,0,355.74,0,362.025v20.759c0,5.732,4.647,10.379,10.379,10.379h155.686c5.732,0,10.379-4.647,10.379-10.379v-20.759 C176.445,355.74,172.666,350.071,166.864,347.653z"
                      />
                      <path
                        style={{ fill: "#D29B6E" }}
                        d="M114.17,306.237H62.275v12.541c0,4.191-2.52,7.97-6.387,9.581l-7.232,3.014 C104.001,345.485,114.17,306.237,114.17,306.237z"
                      />
                      <g>
                        <path
                          style={{ fill: "#E4EAF6" }}
                          d="M25.294,367.729L4.464,351.16C1.673,354.014,0,357.874,0,362.025v20.759 c0,5.732,4.647,10.379,10.379,10.379h20.759v-13.276C31.137,375.157,28.988,370.684,25.294,367.729z"
                        />
                        <path
                          style={{ fill: "#E4EAF6" }}
                          d="M176.445,382.783v-20.759c0-4.119-1.645-7.952-4.397-10.8l-20.898,16.504 c-3.693,2.954-5.843,7.427-5.843,12.157v13.275h20.759C171.798,393.162,176.445,388.515,176.445,382.783z"
                        />
                        <path
                          style={{ fill: "#E4EAF6" }}
                          d="M89.001,382.783h-1.557c-2.436,0-4.411-1.975-4.411-4.411v-34.745h10.379v34.744 C93.412,380.808,91.437,382.783,89.001,382.783z"
                        />
                        <path
                          style={{ fill: "#E4EAF6" }}
                          d="M88.222,343.616L58.52,321.34c-1.907-1.43-4.623-0.965-5.945,1.018l-5.869,8.803l18.21,25.494 c1.384,1.938,4.112,2.317,5.972,0.829L88.222,343.616z"
                        />
                        <path
                          style={{ fill: "#E4EAF6" }}
                          d="M88.222,343.616l29.702-22.276c1.907-1.43,4.623-0.965,5.945,1.018l5.869,8.803l-18.21,25.494 c-1.384,1.938-4.112,2.317-5.972,0.829L88.222,343.616z"
                        />
                      </g>
                      <path
                        style={{ fill: "#F0C087" }}
                        d="M114.17,206.339C88.222,232.286,37.3,211.527,37.3,253.043l3.222,30.581 c0.622,6.841,4.588,12.931,10.591,16.267l29.548,16.415c4.702,2.612,10.419,2.612,15.121,0l29.548-16.415 c6.005-3.336,9.97-9.427,10.591-16.267l3.72-36.32c0.265-2.582,0.321-5.179,0.234-7.769 C137.935,226.325,119.359,216.717,114.17,206.339z"
                      />
                      <path
                        style={{ fill: "#E6AF78" }}
                        d="M37.3,253.043l3.222,30.581c0.622,6.841,4.588,12.931,10.591,16.267l29.548,16.415 c3.263,1.813,7.005,2.282,10.567,1.579l0,0c0,0-14.897-4.515-23.764-28.516c-2.716-7.352-6.487-46.274-3.243-51.031 c6.412-9.402,42.165-10.379,52.729-27.822c-0.522-0.647-1.004-1.296-1.444-1.945c-0.035-0.052-0.078-0.105-0.114-0.158 c-0.459-0.69-0.875-1.382-1.223-2.077C88.222,232.286,37.3,211.527,37.3,253.043z"
                      />
                      <path
                        style={{ fill: "#E4EAF6" }}
                        d="M126.106,382.783h-13.493c-4.872,0-8.822,3.95-8.822,8.822v1.557h31.137v-1.557 C134.928,386.732,130.978,382.783,126.106,382.783z"
                      />
                      <polygon
                        style={{ fill: "#E6AF78" }}
                        points="442.78,323.524 442.78,295.022 369.487,295.022 369.487,323.524 406.133,356.099 "
                      />
                      <path
                        style={{ fill: "#EFF2FA" }}
                        d="M499.443,336.857l-50.385-11.855c-0.761-0.179-1.461-0.483-2.115-0.851l-40.81,23.806l-39.218-24.957 c-1.016,0.956-2.275,1.666-3.706,2.003l-50.385,11.855c-7.358,1.731-12.557,8.296-12.557,15.855v31.89 c0,4.497,3.646,8.144,8.144,8.144h195.447c4.497,0,8.144-3.646,8.144-8.144v-31.89C512,345.153,506.8,338.588,499.443,336.857z"
                      />
                      <path
                        style={{ fill: "#D29B6E" }}
                        d="M369.487,295.022v30.073c46.165,16.632,73.293-24.995,73.293-24.995v-5.078L369.487,295.022 L369.487,295.022z"
                      />
                      <path
                        style={{ fill: "#F0C087" }}
                        d="M353.2,201.37l3.549,78.063c0.332,7.293,3.907,14.055,9.747,18.435l16.836,12.627 c4.229,3.172,9.373,4.886,14.658,4.886h16.287c5.286,0,10.43-1.715,14.658-4.886l16.836-12.627c5.84-4.38,9.416-11.143,9.747-18.435 l3.549-78.063L353.2,201.37L353.2,201.37z"
                      />
                      <path
                        style={{ fill: "#E6AF78" }}
                        d="M393.918,217.657c16.287,0,40.718-4.071,46.513-16.287H353.2l3.548,78.063 c0.332,7.293,3.907,14.055,9.747,18.435l16.836,12.627c4.229,3.172,9.373,4.886,14.658,4.886h8.144 c-8.144,0-24.431-16.287-24.431-36.647c0-9.957,0-36.646,0-48.862C381.702,225.801,385.774,217.657,393.918,217.657z"
                      />
                      <path
                        style={{ fill: "#E4EAF6" }}
                        d="M482.107,366.319l26.385-23.702c2.211,2.8,3.508,6.322,3.508,10.094v31.89 c0,4.497-3.646,8.144-8.144,8.144h-28.502v-11.28C475.354,375.687,477.808,370.181,482.107,366.319z"
                      />
                      <polygon
                        style={{ fill: "#5B5D6E" }}
                        points="416.313,392.745 395.953,392.745 398.499,356.099 413.768,356.099 "
                      />
                      <path
                        style={{ fill: "#515262" }}
                        d="M416.313,347.955h-20.36v2.352c0,5.448,4.416,9.863,9.863,9.863h0.632 c5.448,0,9.863-4.416,9.863-9.863v-2.352H416.313z"
                      />
                      <g>
                        <path
                          style={{ fill: "#E4EAF6" }}
                          d="M368.914,314.46l37.218,33.496c0,0-10.423,5.261-23.286,15.867c-2.653,2.188-6.667,1.301-8.09-1.829 l-17.486-38.468l5.532-8.297C364.18,313.162,367.069,312.799,368.914,314.46z"
                        />
                        <path
                          style={{ fill: "#E4EAF6" }}
                          d="M443.351,314.46l-37.218,33.496c0,0,10.423,5.261,23.286,15.867c2.653,2.188,6.667,1.301,8.09-1.829 l17.486-38.468l-5.532-8.297C448.086,313.162,445.197,312.799,443.351,314.46z"
                        />
                      </g>
                      <path
                        style={{ fill: "#785550" }}
                        d="M430.818,174.394l3.818,26.976c17.425,3.485,19.936,30.83,20.298,38.641 c0.066,1.417,0.518,2.787,1.287,3.979l6.649,10.313c0,0-2.276-17.051,8.144-28.502C471.013,225.801,474.59,158.107,430.818,174.394z "
                      />
                      <path
                        style={{ fill: "#F0C087" }}
                        d="M466.954,252.562l-4.599,18.393c-0.545,2.179-2.503,3.708-4.749,3.708l0,0 c-2.469,0-4.551-1.838-4.858-4.288l-2.351-18.812c-0.629-5.031,3.294-9.474,8.363-9.474h0.017 C464.261,242.088,468.284,247.242,466.954,252.562z"
                      />
                      <path
                        style={{ fill: "#694B4B" }}
                        d="M357.101,167.099l6.023,4.114c-27.23,20.105-22.141,54.588-22.141,54.588 c8.144,8.144,8.144,28.502,8.144,28.502l8.144-8.144c0,0-3.143-23.525,12.216-32.574c14.251-8.398,26.721-4.071,39.445-4.071 c34.101,0,43.645-12.852,41.991-28.502c-0.856-8.099-13.238-24.967-44.789-24.431C393.399,156.797,369.487,160.653,357.101,167.099z "
                      />
                      <path
                        style={{ fill: "#5A4146" }}
                        d="M354.726,205.951c0,0-4.326-17.051,8.398-34.738c-27.23,20.105-22.141,54.588-22.141,54.588 c8.144,8.144,8.144,28.502,8.144,28.502l8.144-8.144c0,0-3.143-23.525,12.215-32.574c14.251-8.398,26.721-4.071,39.445-4.071 c5.546,0,10.379-0.372,14.684-1.008C397.353,209.387,381.872,189.495,354.726,205.951z"
                      />
                      <path
                        style={{ fill: "#E6AF78" }}
                        d="M345.311,252.562l4.599,18.393c0.545,2.179,2.503,3.708,4.75,3.708l0,0 c2.469,0,4.551-1.838,4.858-4.288l2.351-18.812c0.629-5.031-3.294-9.474-8.364-9.474h-0.017 C348.006,242.088,343.981,247.242,345.311,252.562z"
                      />
                      <path
                        style={{ fill: "#E4EAF6" }}
                        d="M454.995,384.602h-20.36c-4.497,0-8.144,3.646-8.144,8.144l0,0h36.646l0,0 C463.138,388.248,459.492,384.602,454.995,384.602z"
                      />
                      <path
                        style={{ fill: "#694B4B" }}
                        d="M256.155,57.5c-139.642,0-124.158,169.814-123.52,292.871c0.024,4.647,2.458,8.838,6.439,11.237 c15.474,9.328,57.97,31.137,117.081,31.137s101.607-21.809,117.081-31.137c3.98-2.4,6.415-6.59,6.439-11.237 C380.313,227.313,395.797,57.5,256.155,57.5z"
                      />
                      <path
                        style={{ fill: "#5A4146" }}
                        d="M247.157,57.849C117.286,65.13,132.011,230.051,132.635,350.37c0.024,4.647,2.458,8.838,6.439,11.237 c15.474,9.328,57.97,31.137,117.081,31.137l35.289-247.023"
                      />
                      <path
                        style={{ fill: "#694B4B" }}
                        d="M256.155,57.5c-79.4,0-84.914,95.942-84.914,95.942c45.765-7.719,73.886,11.579,120.203-7.719 l-35.289,247.023c59.111,0,101.607-21.809,117.081-31.137c3.98-2.4,6.415-6.59,6.439-11.237 C380.313,227.313,395.797,57.5,256.155,57.5z"
                      />
                      <path
                        style={{ fill: "#785550" }}
                        d="M379.675,350.372c0.548-105.742,11.962-245.906-73.41-283.286 c-1.489,7.736-4.185,29.331,2.823,43.348c17.645,35.289,35.289,35.289,52.933,61.756c17.644,97.045-33.714,200.047-50.771,214.068 l0,0c30.222-7.188,51.887-18.562,61.985-24.649C377.216,359.209,379.651,355.019,379.675,350.372z"
                      />
                      <path
                        style={{ fill: "#E6AF78" }}
                        d="M389.846,377.137l-78.722-32.801c-6.575-2.739-10.858-9.164-10.858-16.288v-21.32h-88.222v21.32 c0,7.123-4.283,13.548-10.858,16.288l-78.722,32.801c-9.862,4.109-16.287,13.746-16.287,24.431v35.289 c0,9.744,7.9,17.645,17.644,17.645h264.667c9.744,0,17.644-7.9,17.644-17.645v-35.289 C406.133,390.882,399.708,381.246,389.846,377.137z"
                      />
                      <path
                        style={{ fill: "#B4E1FA" }}
                        d="M389.846,377.137l-76.114-31.714l-57.577,24.849l-57.577-24.849l-76.114,31.714 c-9.862,4.109-16.287,13.746-16.287,24.431v35.289c0,9.744,7.9,17.645,17.644,17.645h264.667c9.744,0,17.644-7.9,17.644-17.645 v-35.289C406.133,390.882,399.708,381.246,389.846,377.137z"
                      />
                      <path
                        style={{ fill: "#D29B6E" }}
                        d="M300.266,306.728h-88.222v21.32c0,7.123-4.283,13.548-10.858,16.288l-12.295,5.124 C282.978,373.449,300.266,306.728,300.266,306.728z"
                      />
                      <g>
                        <path
                          style={{ fill: "#A0D2F0" }}
                          d="M149.178,411.265l-35.411-28.167c-4.744,4.852-7.588,11.413-7.588,18.469v35.289 c0,9.744,7.9,17.644,17.644,17.644h35.289v-22.568C159.11,423.892,155.456,416.288,149.178,411.265z"
                        />
                        <path
                          style={{ fill: "#A0D2F0" }}
                          d="M406.133,436.856v-35.289c0-7.002-2.797-13.518-7.475-18.359l-35.526,28.057 c-6.278,5.023-9.933,12.627-9.933,20.667V454.5h35.289C398.233,454.501,406.133,446.601,406.133,436.856z"
                        />
                        <path
                          style={{ fill: "#A0D2F0" }}
                          d="M256.155,436.856L256.155,436.856c-4.872,0-8.822-3.95-8.822-8.822v-57.742h17.644v57.743 C264.977,432.907,261.027,436.856,256.155,436.856z"
                        />
                        <path
                          style={{ fill: "#A0D2F0" }}
                          d="M256.155,370.272l-50.494-37.871c-3.241-2.431-7.86-1.64-10.107,1.731l-9.977,14.966l30.957,43.339 c2.353,3.295,6.991,3.938,10.152,1.409L256.155,370.272z"
                        />
                        <path
                          style={{ fill: "#A0D2F0" }}
                          d="M256.155,370.272l50.494-37.871c3.241-2.431,7.86-1.64,10.107,1.731l9.977,14.966l-30.957,43.339 c-2.353,3.295-6.991,3.938-10.152,1.409L256.155,370.272z"
                        />
                      </g>
                      <path
                        style={{ fill: "#F0C087" }}
                        d="M300.266,136.9c-44.111,44.111-130.679,8.822-130.679,79.4l5.479,51.989 c1.056,11.629,7.799,21.983,18.006,27.653l50.231,27.906c7.994,4.441,17.713,4.441,25.707,0l50.231-27.906 c10.207-5.672,16.949-16.025,18.006-27.653l6.324-61.745c0.45-4.388,0.546-8.803,0.397-13.208 C340.665,170.879,309.088,154.544,300.266,136.9z"
                      />
                      <path
                        style={{ fill: "#E6AF78" }}
                        d="M169.587,216.3l5.479,51.989c1.056,11.629,7.799,21.983,18.006,27.653l50.231,27.906 c5.547,3.081,11.908,3.88,17.963,2.685l0,0c0,0-25.326-7.674-40.398-48.477c-4.617-12.5-11.028-78.665-5.514-86.752 c10.899-15.985,71.681-17.645,89.641-47.298c-0.888-1.101-1.707-2.203-2.455-3.308c-0.061-0.089-0.133-0.179-0.193-0.268 c-0.78-1.172-1.488-2.348-2.079-3.53C256.155,181.011,169.587,145.722,169.587,216.3z"
                      />
                      <path
                        style={{ fill: "#A0D2F0" }}
                        d="M326.733,436.856h-35.289c-4.872,0-8.822,3.95-8.822,8.822v8.822h52.933v-8.822 C335.555,440.806,331.605,436.856,326.733,436.856z"
                      />
                    </g>
                  </svg>
                </div>
                <span className="tools__info">
                  - Useful tools to help you know the number of words and
                  characters when writing posts for social networks with word
                  limits
                </span>
              </Link>
            </div>
            <p className="tools__text">
              If you find any shortcomings or errors on our site, please let us
              know. <br /> We will be happy to hear from you. <br /> Using our
              site is 100% free, and you can use it as much as you want. We are
              always happy to assist you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
