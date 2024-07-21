import React, {  useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteUser, updatePhone } from "../actions/user.action";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { logout } from "../components/Log/Logout";
import { UidContext } from "../components/AppContext";
import Logout from "../components/Log/Logout";


const Profil = () => {
    const uid =useContext(UidContext)
    const navigate = useNavigate()
  const [updateForm, setUpdateForm] = useState(false);
  const userData = useSelector((state) => state.user);
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const isoDate = userData.birthday;
  const date = new Date(isoDate);

  // Convertir la date au format dd/mm/yyyy
  const formattedDate = date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updatePhone(userData._id, phone));
    setUpdateForm(false);
 
   
  
  }
  const handledelete = () => {
  
    dispatch(deleteUser(userData._id));
   navigate("/")
   window.location.reload();
   
  
  }

  
  return (
    <div>
      <h1>Bienvenue sur votre profil : {userData.name}</h1>
      <h2>Voici votre email : {userData.email}</h2>

      {updateForm === false && (
        <>
          <h3 >
          
            votre numéro de téléphone : {userData.phone}
          </h3>
          <button onClick={() => setUpdateForm(!updateForm)}>
            Modifier numéro
          </button>
        </>
      )}
      {updateForm && (
        <>
          <label htmlFor="number">numéro de téléphone :</label>
          <input
            type="text"
            name="number"
            id="number"
            defaultValue={userData.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleUpdate}>Valider les modification</button>
        </>
      )}
      <h4>Votre date de naissance : {formattedDate}</h4>
      <button onClick={handledelete}>Supprimer mon profil</button>
      <Logout/>
    </div>

  

    
  );
};

export default Profil;
