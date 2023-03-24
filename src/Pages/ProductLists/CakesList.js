import React from "react";
import { Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Config/firebase";

import { useSelector, useDispatch } from "react-redux";
import ActionTypes from "../../Redux/Actions/ActionTypes";

const CakesList = () => {
  const dispatch = useDispatch();
  const { cakesStates } = useSelector((state) => state);

  const deleteCake = (id) => {
    const cakeRef = doc(db, "cakes", id);
    deleteDoc(cakeRef)
      .then((res) => {
        dispatch({ type: ActionTypes.cakesActions.DELETE_CAKE, payload: id });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1 className="text-center">Pastalar</h1>
      
      <div className="container d-flex justify-content-between">
        <Link to={"/admin"} className="btn btn-secondary">
          Yönetici Paneline Dön
        </Link>

        <Link to={"/add-cake"} className="btn btn-primary">
          Yeni Ürün Ekle
        </Link>
      </div>
      <hr />
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Sıra Nu.</th>
              <th scope="col">Ürün Adı</th>
              <th scope="col">Açıklama</th>
              <th scope="col">Ağırlığı</th>
              <th scope="col">Saklama Süresi</th>
              <th scope="col">Çözülme Süresi</th>
              <th scope="col">Dayanma Süresi</th>
              <th scope="col">Dilim Adedi</th>
              <th scope="col">Porsiyon Gramaj</th>
              <th scope="col">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {cakesStates.cakes.map((cake, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{cake.title}</td>
                <td>{cake.description}</td>
                <td>{cake.agirlik}</td>
                <td>{cake.saklamaSuresi}</td>
                <td>{cake.cozulmeSuresi}</td>
                <td>{cake.dayanmaSuresi}</td>
                <td>{cake.dilimAdedi}</td>
                <td>{cake.porsiyonGramaj}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      onClick={() => deleteCake(cake.id)}
                      type="button"
                      className="btn btn-sm btn-danger"
                    >
                      Sil
                    </button>
                    <button type="button" className="btn btn-sm btn-success">
                      Güncelle
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CakesList;
