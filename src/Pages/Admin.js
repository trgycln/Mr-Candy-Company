import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <h1 className="text-center">Yönetim Paneli</h1>
      <div>
        <ul>
          <li><Link to={"/cakes-list"}>Pastalar</Link></li>
          <li><Link to={"/cakes-list"}>Çaylar</Link></li>
          <li><Link to={"/cakes-list"}>Kahveler</Link></li>
          <li><Link to={"/cakes-list"}>Frappeler</Link></li>
          <li><Link to={"/cakes-list"}>Çikolatalar</Link></li>
          <li><Link to={"/cakes-list"}>Ekipmanlar</Link></li>
          <li><Link to={"/cakes-list"}>Kokteyl Şuruplar</Link></li>
          <li><Link to={"/cakes-list"}>Soslar ve Şantiler</Link></li>
          <li><Link to={"/cakes-list"}>Meyve Püreleri</Link></li>
          <li><Link to={"/cakes-list"}>Limonatalar</Link></li>   
        </ul>
      </div>
    </div>
  );
};

export default Admin;
