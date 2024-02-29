import React from "react";
import final from "../assets/daily.jpg";
import logo from "../assets/logo.png";
import Header from "../components/Header/Header";
import home2 from "../components/CSS/home.css";
import { Link } from "react-router-dom";

export default function Home2() {
  return (
    <div>
      <section>
        <Header />
        <div className="hero">
          <div className="right-top-img">
            <svg
              className="img-right"
              xmlns="http://www.w3.org/2000/svg"
              width="436"
              height="593"
            >
              <g fill="none" fillRule="evenodd" stroke="#96A9C6">
                <path d="M341.639-24.675c-75.703-23.693-153.543-63.212-233.235 8.97C28.71 56.477-21.39 119.709 10.964 201.522c32.354 81.814 164.422 30.855 202.794 103.977 38.373 73.122-45.94 139.485-9.591 204.563 36.35 65.078 64.3 106.787 181.115 65.409 116.816-41.379 106.045-146.664 194.878-208.318 88.833-61.654 184.944-153.953 53.046-318.647S417.341-.98 341.64-24.674z" />
                <path d="M351.105 13.249c-61.583-19.24-124.905-51.33-189.734 7.283C96.543 79.146 55.786 130.491 82.105 196.925c26.32 66.434 133.755 25.055 164.971 84.43 31.216 59.377-37.372 113.266-7.802 166.11 29.57 52.845 52.306 86.713 147.334 53.113 95.028-33.6 86.267-119.094 158.53-169.158 72.265-50.064 150.45-125.012 43.153-258.747S412.688 32.489 351.105 13.249z" />
                <path d="M368.812 38.417C318.85 22.72 267.478-3.465 214.883 44.36c-52.594 47.825-85.66 89.72-64.307 143.926 21.353 54.206 108.513 20.443 133.838 68.89 25.325 48.448-30.32 92.418-6.33 135.536 23.99 43.117 42.436 70.752 119.531 43.336 77.095-27.415 69.987-97.173 128.614-138.022 58.627-40.85 122.058-102.003 35.009-211.122-87.049-109.12-142.465-32.788-192.426-48.487z" />
                <path d="M387.316 69.184c-40.295-12.596-81.728-33.603-124.147 4.768-42.419 38.371-69.087 71.984-51.865 115.475 17.221 43.491 87.518 16.402 107.943 55.273 20.425 38.87-24.453 74.148-5.105 108.743s34.225 56.767 96.404 34.77c62.179-21.996 56.446-77.965 103.73-110.739 47.284-32.774 98.442-81.839 28.236-169.388-70.207-87.55-114.901-26.307-155.196-38.902z" />
                <path d="M392.083 89.046c-32.91-10.295-66.749-27.467-101.393 3.897-34.643 31.365-56.424 58.84-42.358 94.389 14.065 35.549 71.477 13.407 88.158 45.179 16.682 31.772-19.971 60.609-4.17 88.886 15.803 28.277 27.953 46.4 78.735 28.42 50.782-17.979 46.1-63.727 84.718-90.516 38.617-26.79 80.398-66.895 23.06-138.457-57.339-71.562-93.841-21.503-126.75-31.798z" />
                <path d="M401.225 103.406c-26.718-8.36-54.191-22.305-82.318 3.165-28.127 25.47-45.81 47.78-34.39 76.649 11.419 28.868 58.03 10.887 71.574 36.688 13.544 25.8-16.214 49.217-3.385 72.18 12.83 22.963 22.694 37.68 63.923 23.08 41.229-14.6 37.428-51.75 68.78-73.505 31.353-21.755 65.275-54.323 18.723-112.435-46.553-58.112-76.188-17.462-102.907-25.822z" />
              </g>
            </svg>
          </div>
          <div className="hero_wrapper ">
            <div className="hero_content">
              <h1 className="title1">
                {" "}
                Find <br /> your insparition
              </h1>
              <p className="hero_text">
                Archi World is your go-to platform for discovering diverse
                architecture projects and sharing your own with like-minded
                individuals. Connect with the global architecture community
                today.
              </p>
              <div className="  flex  ">
                <Link to="/projects">
                  <button className="btn hover:scale-110 transition-all duration-500  m-auto">
                    Browse Projets
                  </button>
                </Link>
              </div>
            </div>
            <div className="hero_image">
              <img className="building " src={final} alt="" />
            </div>
          </div>
        </div>
        <div className="post-main">
          <div className="">
            <h3 className="title1 text-black mb-6">We are unique</h3>
          </div>

          {/* We are unique section */}

          <section>
            <div className="grid-container ">
              <div className="grid-item grid">
                <img className="univLogo place-self-center" src={logo} alt="" />
                <h3 className="text-black pt-3 ">Trust</h3>
                <p className=" text-black ">
                  {" "}
                  Trusted by universuty of Algeries 1
                </p>
              </div>
              <div className="grid-item grid">
                <svg
                  className="place-self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="86"
                  height="100"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle cx="43" cy="43" r="43" fill="#96A9C6" />
                    <path
                      fill="#FFF"
                      fillRule="nonzero"
                      d="M32 59h1.195l21.072-20.146c.276-.356.123-.534-.46-.534H45.11l9.158-10.786c.276-.356.061-.534-.612-.534h-11.67c-.337 0-.613.119-.888.356l-8.515 14.645c-.061.356.122.534.582.534h8.423L32 59z"
                    />
                  </g>
                </svg>
                <h3 className="text-black ">Snappy Support</h3>
                <p className="text-black ">
                  "Our 24/7 support ensures a seamless user experience. Count on
                  us to provide the best possible service and support."
                </p>
              </div>
              <div className="grid-item grid">
                <svg
                  className="place-self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="86"
                  height="100"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle cx="43" cy="43" r="43" fill="#96A9C6" />
                    <path
                      fill="#FFF"
                      fillRule="nonzero"
                      d="M52.874 49.874l-5.095-2.547c-.48-.24-.779-.724-.779-1.261v-1.804c.122-.149.25-.32.383-.507.661-.933 1.19-1.972 1.576-3.093a2.116 2.116 0 001.241-1.929V36.6c0-.514-.192-1.011-.533-1.4v-2.837c.03-.293.147-2.04-1.116-3.48C47.455 27.633 45.678 27 43.267 27c-2.412 0-4.19.634-5.285 1.883-1.263 1.44-1.145 3.187-1.115 3.48V35.2a2.127 2.127 0 00-.534 1.4v2.133c0 .65.295 1.255.799 1.658.488 1.935 1.51 3.392 1.868 3.86v1.765c0 .516-.282.99-.734 1.237l-4.758 2.596A4.81 4.81 0 0031 54.073V55.8c0 2.531 8.024 3.2 12.267 3.2 4.242 0 12.266-.669 12.266-3.2v-1.623a4.786 4.786 0 00-2.659-4.303z"
                    />
                  </g>
                </svg>
                <h3 className="text-black ">Peaple first</h3>
                <p className="text-black ">
                  {" "}
                  "Simple plans, complete coverage. We've got you covered when
                  it counts, without the hassle of conditions and clauses."
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* how we work section */}

      <section>
        <div className=" banner-father bg-white ">
          <div className="banner justify-between bg-red-500">
            <div className=" banner2 flex  justify-around items-center w-full  p-8 ">
              <div className="">
                <h4 className="text-3xl font-bold text-white m-8">
                  {" "}
                  Join us <br /> And be a member of the familly
                </h4>
              </div>
              <div className=" flex justify-center items-center">
                <a href="/signup">
                  {" "}
                  <button className="btn  m-auto items-center hover:scale-110 transition-all duration-500">
                    How we work
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer section */}
      <section>
        <footer>
          <div className="container">
            <div className="footer ">
              <div className="footer-header flex  justify-between  items-center">
                <div className="">
                  <h1 className="project-name">ARCHI WORLD</h1>
                </div>
                <div className="">
                  <h1 className="made-by">Made by KHAMOUM ABDERAOUF</h1>
                </div>
                <div className="footer-icons flex ">
                  <a
                    target="_blank"
                    href="https://web.facebook.com/profile.php?id=100012912673975"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="#837D88"
                        d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                      />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/abdou.khmm/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="#837D88"
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                      />
                    </svg>
                  </a>
                  <a target="_blank" href="https://twitter.com/rouffakh">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                    >
                      <path
                        fill="#837D88"
                        d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                      />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.pinterest.fr/abderaoufa88/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="#837D88"
                        d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}