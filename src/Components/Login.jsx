//import React from "react";

const Login = ({
  loggedInShow,
  setShow,
  handleLogin,
  setLoginForm,
  userName,
  password,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginForm((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        name="userName"
        value={userName}
        placeholder="user-name"
        onChange={handleChange}
      ></input>
      <input
        name="password"
        value={loggedInShow ? "" : password}
        placeholder="password"
        onChange={handleChange}
      ></input>

      <button
        onClick={() =>
          !loggedInShow
            ? handleLogin()
            : setShow((prevState) => {
                return {
                  ...prevState,
                  loggedInShow: false,
                };
              })
        }
      >
        {" "}
        {!loggedInShow ? " Login" : "Logout"}
      </button>
      {/* <button      {show.loggedInShow?   onClick={handleLogin} :  }   >  {!show ? " Login" : "Logout"}</button> */}
    </div>
  );
};

export default Login;
