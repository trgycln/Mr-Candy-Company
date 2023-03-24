import React from "react";
import "../Admin/admin.css";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin-container container">
      <h1 className="text-center">Yönetim Paneli</h1>
      <div>
        <ul>
          <li><b>Ürünler</b></li>
          <hr/>
          <li>
            <Link to={"/cakes-list"}>Pastalar</Link>
          </li>
          <li>
            <Link to={"/teas-list"}>Çaylar</Link>
          </li>
          <li>
            <Link to={"/coffees-list"}>Kahveler</Link>
          </li>
          <li>
            <Link to={"/frappes-list"}>Frappeler</Link>
          </li>
          <li>
            <Link to={"/cakes-list"}>Çikolatalar</Link>
          </li>
          <li>
            <Link to={"/cakes-list"}>Ekipmanlar</Link>
          </li>
          <li>
            <Link to={"/cakes-list"}>Kokteyl Şuruplar</Link>
          </li>
          <li>
            <Link to={"/cakes-list"}>Soslar ve Şantiler</Link>
          </li>
          <li>
            <Link to={"/cakes-list"}>Meyve Püreleri</Link>
          </li>
          <li>
            <Link to={"/cakes-list"}>Limonatalar</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
