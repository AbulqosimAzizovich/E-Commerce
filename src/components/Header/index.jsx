import "./style.scss";

const index = () => {
  return (
    <header>
      <div className="container">
        <div className="header__navbar">
          <div className="header__logo">
            <h1>COMPANY LOGO</h1>
          </div>

          <div className="header__center">
            <button className="katalog">
              <i class="bx bx-menu"></i>
              <span>Katalog</span>
            </button>

            <div className="header__center--search">
              <div className="search">
                <input
                  type="text"
                  autocomplete="off"
                  placeholder="Qidirish"
                  class="placeholder:text-sm"
                ></input>

                <button
                  aria-label="Header microphone"
                  class="header-microphone"
                >
                  <svg
                    width="15"
                    height="22"
                    viewBox="0 0 15 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.1988 1.97232C8.67647 1.97232 9.88036 3.20843 9.88036 4.72842V10.7018C9.88036 12.2205 8.67769 13.4566 7.1988 13.4566C5.71991 13.4566 4.51846 12.2205 4.51846 10.7018V4.72842C4.51846 3.20963 5.72113 1.97232 7.1988 1.97232ZM7.1988 0.219971C4.72991 0.219971 2.73035 2.23943 2.73035 4.72842V10.7018C2.73035 13.1931 4.73113 15.209 7.1988 15.209C9.66647 15.209 11.6673 13.1919 11.6673 10.7018V4.72842C11.6673 2.23943 9.66647 0.219971 7.1988 0.219971Z"
                      fill="#333333"
                    ></path>
                    <path
                      d="M14.4479 11.0982C14.4479 10.6143 14.0483 10.2227 13.5545 10.2227C13.0619 10.2227 12.6623 10.6155 12.6623 11.0982C12.6623 14.1981 10.2227 16.7182 7.22458 16.7182C4.22646 16.7182 1.78689 14.1981 1.78689 11.0982C1.78689 10.6143 1.386 10.2227 0.893447 10.2227C0.40089 10.2227 0 10.6155 0 11.0982C0 14.8533 2.76834 17.9579 6.33113 18.4071V20.9045C6.32991 21.3884 6.72957 21.78 7.22335 21.78C7.71713 21.78 8.1168 21.3884 8.1168 20.9045V18.4071C11.6796 17.9579 14.4479 14.8533 14.4479 11.0982Z"
                      fill="#333333"
                    ></path>
                  </svg>
                </button>
              </div>

              <button aria-label="search" class="header-search-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <ellipse
                    cx="10"
                    cy="9.79994"
                    rx="7"
                    ry="6.86"
                    stroke="#333333"
                    stroke-width="2"
                  ></ellipse>
                  <path
                    d="M21 20.58L15 14.7"
                    stroke="#333333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
