import React from 'react';
import axios from 'axios';
import cookie from "js-cookie"

const Logout = () => {
    const removeCookie = (key) => {
        if(window !== "undefined")
            cookie.remove(key, {expires: 1})
    }
    const logout = async ()=> {
        await axios({
            method : "get",
            url : `${process.env.REACT_APP_API_URL}user/logout`,
            withCredentials : true,
        })
        .then (()=> removeCookie('jwt'))
        .catch((err) => console.log(err))
        window.location = "/"
    }
    return (
      <button onClick={logout}> se deconnecter</button>
    );
};

export default Logout;