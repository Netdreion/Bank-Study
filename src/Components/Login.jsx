import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        name="userName"
        value={user.userName}
        placeholder="user-name"
        onChange={handleChange}
      ></input>
      <input
        name="password"
        value={user.password}
        placeholder="password"
        onChange={handleChange}
      ></input>
      <button>{user.userName.length < 5 ? "login" : "logout"}</button>
    </div>
  );
};

export default Login;
