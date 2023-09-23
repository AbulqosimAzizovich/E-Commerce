import "./style.scss";
import telegramicon from "../../assets/icons/telegramicon.png";
const index = () => {
  return (
    <div className="footer bg-[#333]">
      <div className="container">
        <div className="top">
          <div className="top-left">
            <p>Саволингиз борми? Қўнғироқ қилинг</p>
            <a href="tel:+998 71 209 99 44">+998 71 209 99 44</a>
            <ul className="social-networks">
              <li className="sn-wrapper">
                <a href="">
                  <img src={telegramicon} alt="" />
                </a>
              </li>
              <li className="sn-wrapper">
                <img src={telegramicon} alt="images" />
              </li>
              <li className="sn-wrapper">
                <img src={telegramicon} alt="" />
              </li>
              <li className="sn-wrapper">
                <img src={telegramicon} alt="" />
              </li>
            </ul>
            <div className="top-left-links">
              <button>
                <img
                  src="https://texnomart.uz/_nuxt/img/playmarket-logo-kr.8adf947.svg"
                  alt=""
                />
              </button>
              <button>
                <img
                  src="https://texnomart.uz/_nuxt/img/appstore-logo-kr.9f12b6a.svg"
                  alt=""/>

              </button>
            </div>
            <div className="adress">
              <a href="" className="top-left-adress">
                Дўконлар манзиллари <span> Тошкент</span>
              </a>
            </div>
          </div>
          <div className="top-right">
            <div className="top-right-left">
              <ul>
                <h2>Компания</h2>
                <li>
                  <a href="">Юридик шахслар учун</a>
                </li>
                <li>
                  <a href="">Биз ҳақимизда</a>
                </li>
                <li>
                  <a href="">Янгиликлар ва блоглар</a>
                </li>
                <li>
                  <a href="">IMEI ни текшириш</a>
                </li>
              </ul>
            </div>
            <div className="top-right-center">
              <ul>
                <h2>Маълумот</h2>
                <li>
                  <a href="">Бепул етказиб бериш</a>
                </li>
                <li>
                  <a href="">Бонус тизими</a>
                </li>
                <li>
                  <a href="">Техномартда ишлаш</a>
                </li>
                <li>
                  <a href="">Шахсий кабинет</a>
                </li>
                <li>
                  <a href="">Aлоқа рақамлари</a>
                </li>
              </ul>
            </div>
            <div className="top-right-right">
              <ul>
                <h2>Ҳаридорга ёрдам</h2>
                <li>
                  <a href="">Муддатли тўловга сотиб олиш</a>
                </li>
                <li>
                  <a href="">Махсулотни қайтариш</a>
                </li>
                <li>
                  <a href="">Маҳсулотлар учун кафолат</a>
                </li>
                <li>
                  <a href="">Кўп сўраладиган саволлар</a>
                </li>
                <button>
                  <div className="image">
                    <img src={telegramicon} alt="" />
                  </div>
                  <a href="">Бонусингизни билиб олинг</a>
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>
            2016-2023 © texnomart.uz. Барча ҳуқуқлар ҳимояланган. Товарларнинг
            кўрсатилган қиймати ва уларни сотиб олиш шартлари жорий санага амал
            қилади
          </p>
          <div className="payment">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAYAAAA9UNxEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKXSURBVHgB7ZldSFNhGMf/5pxu6NiWS9FZXkSDUsqosQsF66JCYmAEFhFSSd0lBELdFV30cTm6qS5c3UTQbjJiRs1laR9i2lppa8XKbW3i3Kfbcl+9x2A0FtVFzxrbfvDCec77cOB/nvd5zvO+pyyVSjUDGGSjE4XNNBvdZUzwFLvYguLAyAlOoYhYhSKDB0K0unG8nrGn7TqZCKdP7MnwuXhVj5O9O4HhM0BiGTx5G/jKo6CCVLDh2SxGJ6xpWyatyRJ8z2BCp3IDWgIuxD8akfQ7SQXnxZK+wKLM67qE8tr1oCYvBHPLXn1Kh1fK60ipr4CSvClaFpsbvQNaHDs3BEpKVTrXHNi7HYFQNG3L6yWg5L8LFlTxEYsn07awkg9KiAWX/dFj8M4Y7C5f2lZtbsb+rq2ggjSHBVUVGfZyLJ7lE4nGMuxyXjkoIRXMNRo/4w9GYLY407bN7oHHt5Th01QvBSWkglsVjVn3zmqG8Nm5COe8H/3nb2fNb2tdB0pId0tc9W3vuZxRhX+HRCTEsLYfa1bXgArSCIuqq3BIrfxr/+MHO0jFcpDvh7nHa24YoLk5gkQi+UufSj4PfT3tGOjbBWpydgBgd3mh009hwmSDayGAeDyBtQ1StG1swuF9KtSKq5ELSice/xKrbR4O1lQsLIZw95EJSfZuX7AIc42GxxuCzeFBKPwND8dnWbeVwOOXH1bmRp6/BxWkgifffsGDsXcQs+obCEVW8tnyycVmUnhjceDarSfw+sO4bzTDHwgjwL7T+lEzdqgUoIJ0Sc999SLIIiivE+PppBW7OzbBNDOHRrZBCC5FUcG6KqGADzfLae7a4fahRdEAmYSuUpdyuNDhBBtRPExzgo/gx2+IQsfIRvd3aYsETCPHV5cAAAAASUVORK5CYII="
              alt=""
            />
            <img src="https://texnomart.uz/_nuxt/img/alif.6e1bcde.png" alt="" />
            <img
              src="https://texnomart.uz/_nuxt/img/intend.81957d2.png"
              alt=""
            />
            <img
              src="https://texnomart.uz/_nuxt/img/payme.677630d.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
