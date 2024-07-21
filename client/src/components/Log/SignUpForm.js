// import React, { useState } from "react";
// import axios from "axios";
// import SignInForm from "./SignInForm";

// const SignUpForm = () => {
//   const [formSubmit, setFormSubmit] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [birthday, setBirthday] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [controlPassword, setControlPassword] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     const passwordConfirmError = document.querySelector(
//       ".password-confirm-error"
//     );
//     const emailError = document.querySelector(".email-error");
//     const passwordError = document.querySelector(".password-error");
//     const birthdayError = document.querySelector(".birthday-error");
//     const phoneError = document.querySelector(".phone-error");
//     const nameError = document.querySelector(".name-error");
//     passwordConfirmError.innerHTML = "";
//     passwordError.innerHTML = "";
//     birthdayError.innerHTML = "";
//     phoneError.innerHTML = "";
//     nameError.innerHTML = "";
//     emailError.innerHTML = "";

//     if (password !== controlPassword) {
//       passwordConfirmError.innerHTML = "les mots de passe ne correspondent pas";
//     } else {
//       await axios({
//         method: "post",
//         url: `${process.env.REACT_APP_API_URL}user/register`,
//         data: {
//           name,
//           email,
//           password,
//           phone,
//           birthday,
//         },
//       })
//         .then((res) => {
//           console.log(res);
//           if (res.data.errors) {
//             emailError.innerHTML = res.data.errors.email;
//             passwordError.innerHTML = res.data.errors.password;
//             birthdayError.innerHTML = res.data.errors.birthday;
//             phoneError.innerHTML = res.data.errors.phone;
//             nameError.innerHTML = res.data.errors.name;
//           } else {
//             setFormSubmit(true);
//           }
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   return (
//     <>
//       {formSubmit ? (
//         <>
//           <SignInForm />
//           <h4>Enregistrement reussi, veuillez vous connecter</h4>
//         </>
//       ) : (
//       <form onSubmit={handleSubmit}>
  //     <div>
  //     <label>Name:</label>
  //     <input
  //       type="text"
  //       name="name"
  //       value={name}
  //       onChange={handleChange}
  //       required
  //     />
  //     {errors.name && <span className="error">{errors.name}</span>}
  //   </div>
  //   <div>
  //     <label>Email:</label>
  //     <input
  //       type="email"
  //       name="email"
  //       value={email}
  //       onChange={handleChange}
  //       required
  //     />
  //     {errors.email && <span className="error">{errors.email}</span>}
  //   </div>
  //   <div>
  //     <label>Password:</label>
  //     <input
  //       type="password"
  //       name="password"
  //       value={password}
  //       onChange={handleChange}
  //       required
  //     />
  //     {errors.password && <span className="error">{errors.password}</span>}
  //   </div>
  //   <div>
  //     <label>Confirm Password:</label>
  //     <input
  //       type="password"
  //       name="controlPassword"
  //       value={controlPassword}
  //       onChange={handleChange}
  //       required
  //     />
  //     {errors.passwordConfirm && (
  //       <span className="error">{errors.passwordConfirm}</span>
  //     )}
  //   </div>
  //   <div>
  //     <label>Phone:</label>
  //     <input type="text" name="phone" value={phone} onChange={handleChange} />
  //     {errors.phone && <span className="error">{errors.phone}</span>}
  //   </div>
  //   <div>
  //     <label>Birthday:</label>
  //     <input
  //       type="date"
  //       name="birthday"
  //       value={birthday}
  //       onChange={handleChange}
  //     />
  //     {errors.birthday && <span className="error">{errors.birthday}</span>}
  //   </div>
  //   <button type="submit">Register</button>
  // </form>
//       )}
//     </>
//   );
// };

// export default SignUpForm;
// RegisterForm.js
import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
    const [formSubmit, setFormSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    controlPassword: "",
    phone: "",
    birthday: "",
  });

  const [errors, setErrors] = useState({});

  const { name, email, password, controlPassword, phone, birthday } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    if (password !== controlPassword) {
      setErrors({ passwordConfirm: "Les mots de passe ne correspondent pas" });
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}user/register`,
        {
          name,
          email,
          password,
          phone,
          birthday,
        }
      );
      console.log(res.data);
      // alert("User registered successfully!");
      setFormSubmit(true);
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else {
        console.error(err);
      }
    }
  };

  return (
      <>
      {formSubmit ? (
        <>
          <SignInForm/>
          <h4>Enregistrement reussi, veuillez vous connecter</h4>
        </>
      ) : (
      <form onSubmit={handleSubmit}>
        <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
      type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
      <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="controlPassword"
          value={controlPassword}
          onChange={handleChange}
          required
        />
        {errors.passwordConfirm && (
          <span className="error">{errors.passwordConfirm}</span>
       )}
      </div>
      <div>
       <label>Phone:</label>
       <input type="text" name="phone" value={phone} onChange={handleChange} />
       {errors.phone && <span className="error">{errors.phone}</span>}
         </div>
        <div>
         <label>Birthday:</label>
         <input
           type="date"
           name="birthday"
           value={birthday}
           onChange={handleChange}
         />
         {errors.birthday && <span className="error">{errors.birthday}</span>}
       </div>
       <button type="submit">Register</button>
     </form>
          )}
         </>
     );
};

export default SignUpForm;
