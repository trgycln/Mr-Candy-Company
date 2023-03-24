import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"} >
            Mr Candy Company
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link">
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ürünler
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" >Pastalar</Link></li>
                  <li><Link className="dropdown-item">Çikolatalar</Link></li>
                  <li><Link className="dropdown-item">Frappeler</Link></li>
                  <li><Link className="dropdown-item">Meyve Püreleri</Link></li>
                  <li><Link className="dropdown-item">Soslar ve Şantiler</Link></li>
                  <li><Link className="dropdown-item">Kokteyl Şuruplar</Link></li>
                  <li><Link className="dropdown-item">Çaylar</Link></li>
                  <li><Link className="dropdown-item">Kahveler</Link></li>
                  <li><Link className="dropdown-item">Limonatalar</Link></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item">
                      Ekipmanlar
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
