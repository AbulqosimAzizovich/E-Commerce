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
            <button>
              <i class="bx bx-menu"></i>
              <span>Katalog</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
