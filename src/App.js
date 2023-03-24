import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ActionTypes from "./Redux/Actions/ActionTypes";

import { db } from "./Config/firebase";
import { collection, getDocs } from "firebase/firestore";

import Router from "./Config/Router";

function App() {
  const dispatch = useDispatch();

  dispatch({ type: ActionTypes.cakesActions.GET_CAKES_START });

  useEffect(() => {
    const cakesRef = collection(db, "cakes");
    getDocs(cakesRef)
      .then((data) => {
        let cakes = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        dispatch({type:ActionTypes.cakesActions.GET_CAKES_SUCCESS, payload: cakes})
      })
      .catch((err) => {
        dispatch({
          type: ActionTypes.cakesActions.GET_CAKES_FAIL,
          payload: "Pasta bilgilerini çekme esnasında hata oluştu",
        });
      });
  }, []);

  return <Router />;
}

export default App;
