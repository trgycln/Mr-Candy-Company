import React, { useState } from "react";
import { db } from "../../Config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import actionTypes from "../../Redux/Actions/ActionTypes"

const AddCake = () => {
	const navigate =useNavigate()
  const dispatch = useDispatch();
  const cakeRef = collection(db, "cakes");
  const [formStates, setFormStates] = useState({
    title: "",
    description: "",
    agirlik: "",
    saklamaSuresi: "",
    cozulmeSuresi: "",
    dayanmaSuresi: "",
    dilimAdedi: "",
    porsiyonGramaj: "",
  });

  const handleForm = (event) => {
    event.preventDefault();
    // Validations
    if (
      formStates.title === "" ||
      formStates.description === "" ||
      formStates.agirlik === ""
    ) {
      alert("Ürün adı, açıklama ve ağırlık boş bırakılamaz");
      return;
    }

    addDoc(cakeRef, formStates)
      .then((res) => {
		dispatch({type:actionTypes.cakesActions.ADD_CAKE, payload:formStates})
		navigate("/cakes-list")
	  })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container my-3">
      <form onSubmit={handleForm}>
        <div className="mb-3 d-flex">
          <label htmlFor="title" className="form-label w-25">
            Ürün Adı
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Portakal Soslu Pekin Ördeği"
            value={formStates.title}
            onChange={(event) => {
              setFormStates({ ...formStates, title: event.target.value });
            }}
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="description" className="form-label w-25">
            Ürün Açıklaması
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Portakal, sos, pekin ördeği vs."
            value={formStates.description}
            onChange={(event) => {
              setFormStates({ ...formStates, description: event.target.value });
            }}
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="agirlik" className="form-label w-25">
            Ağırlığı (gr)
          </label>
          <input
            type="number"
            className="form-control"
            id="agirlik"
            placeholder="1600"
            value={formStates.agirlik}
            onChange={(event) => {
              setFormStates({ ...formStates, agirlik: event.target.value });
            }}
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="saklamaSuresi" className="form-label w-25">
            Saklama Süresi (ay)
          </label>
          <input
            type="number"
            className="form-control"
            id="saklamaSuresi"
            placeholder="6"
            value={formStates.saklamaSuresi}
            onChange={(event) => {
              setFormStates({
                ...formStates,
                saklamaSuresi: event.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="cozulmeSuresi" className="form-label w-25">
            Çözülme Süresi (saat)
          </label>
          <input
            type="number"
            className="form-control"
            id="cozulmeSuresi"
            placeholder="3"
            value={formStates.cozulmeSuresi}
            onChange={(event) => {
              setFormStates({
                ...formStates,
                cozulmeSuresi: event.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="dayanmaSuresi" className="form-label w-25">
            Dayanma Süresi (gün)
          </label>
          <input
            type="number"
            className="form-control"
            id="dayanmaSuresi"
            placeholder="3"
            value={formStates.dayanmaSuresi}
            onChange={(event) => {
              setFormStates({
                ...formStates,
                dayanmaSuresi: event.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="dilimAdedi" className="form-label w-25">
            Dilim Adedi (adet)
          </label>
          <input
            type="number"
            className="form-control"
            id="dilimAdedi"
            placeholder="10"
            value={formStates.dilimAdedi}
            onChange={(event) => {
              setFormStates({ ...formStates, dilimAdedi: event.target.value });
            }}
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="porsiyonGramaj" className="form-label w-25">
            Porsiyon Gramajı (gr)
          </label>
          <input
            type="number"
            className="form-control"
            id="porsiyonGramaj"
            placeholder="160"
            value={formStates.porsiyonGramaj}
            onChange={(event) => {
              setFormStates({
                ...formStates,
                porsiyonGramaj: event.target.value,
              });
            }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" type="submit">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCake;
