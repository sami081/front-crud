import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = (e) => {
    e.preventDefault();
    const emailError= document.querySelector(".email.error")
    const passwordError = document.querySelector(".password.error")
        axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}user/login`,
      withCredentials: true,
      data: {
        email: email,
        password: password,
      },
    })
    .then((res)=> {
      console.log("reponse" + res);
      if(res.data.errors) {
        console.log(("non"));
        emailError.innerHTML= `<p>erreur sur l'email</p>`
        passwordError.innerHTML=`<p>Erreur sur le mot de passe</p>`
      } else {
        console.log('yes');
        window.location="/profil"
      }
    })
    .catch((err)=> {
      console.log("erreur" + err);
    })
  };
  return (
    <form action="" onSubmit={handlelogin} id="sign-up-form">
      <div className="email-bloc">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="email error"></div>
      </div>
      <div className="password-bloc">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="password error"></div>
      </div>
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInForm;
