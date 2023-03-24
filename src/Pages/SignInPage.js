import React, { useState } from "react";
import { auth } from "../Config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInPage = () => {
  const [formStates, setFormStates] = useState({
    email: "",
    password: "",
  });
  const [errorType, setErrorType]=useState("")
  const [errorMessage,setErrorMessage]=useState("")

  const handleSignIn = (e) => {
    e.preventDefault();

    /* Validation */

    if (formStates.email === "") {
      setErrorType("email")
      setErrorMessage("Kullanıcı adı boş bırakılamaz")
      return;
    }
    if (formStates.password === "") {
      setErrorType("password")
      setErrorMessage("Parola boş bırakılamaz")
      return;
    }
    if (formStates.password.length < 6) {
      setErrorType("passwordLenght")
      setErrorMessage("Parola en az 6 karakter olmalıdır")
      return;
    }

    signInWithEmailAndPassword(auth, formStates.email, formStates.password)
      .then((res) => {
        console.log("signIn done");
      })
      .catch((err) => {});
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{
		backgroundColor:"#fff",
		padding:"20px",
		borderRadius:"15px"
	  }}>
        <h1 style={{color:"black", fontWeight:"bold"}} className="my-3 text-center">Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Kullanıcı Adı
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={formStates.email}
              onChange={(e) => {
                setFormStates({ ...formStates, email: e.target.value });
              }}
            />
            {
              errorType==="email" ? <p style={{color:"red"}}><small>{errorMessage} </small></p> : null
            }
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Parola
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              autoComplete="off"
              value={formStates.password}
              onChange={(e) => {
                setFormStates({
                  ...formStates,
                  password: e.target.value,
                });
              }}
            />
             {
              errorType==="password" && (<p style={{color:"red"}}><small>{errorMessage} </small></p>)
            }
            {
              errorType==="passwordLenght" && (<p style={{color:"red"}}><small>{errorMessage} </small></p>)
            }
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
