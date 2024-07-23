import axios from "axios";

export const GET_USER = "GET_USER";
export const UPDATE_PHONE = "UPDATE_PHONE";
export const DELETE_USER ="DELETE_USER";

export const getUser = (uid) => {
  return (dispatch) => {
   
    return axios
      .get(`${process.env.REACT_APP_API_URL}user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
};
export const updatePhone = (userId, phone) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}user/` + userId,
      data: { phone },
    })
      .then((res) => {
        dispatch({ type: UPDATE_PHONE, payload: phone });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (userId) => {
  return(dispatch) => {
    return axios({
      method: "delete",
      url :`${process.env.REACT_APP_API_URL}user/` + userId,
    })
    .then((res)=> {
      dispatch({type : DELETE_USER, payload : userId})
    })
    .catch((err) => console.log(err));
  }
}