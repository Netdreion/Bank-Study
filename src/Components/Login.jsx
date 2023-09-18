import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: null,
  });
  const handleChange = (e) => {
    if (user.userName.lenght > 5 && user.pasword.length > 5) {
      return (
        <div>
          <p>please enter more then 5 charecter</p>
        </div>
      );
    } else {
      setUser({ userName: e.target.value, password: e.target.value });
    }
  };

  return (
    <div>
      <input
        value={user.userName}
        placeholder="user-name"
        onChange={handleChange}
      ></input>
      <input value="text" placeholder="user-name"></input>
      <button>login</button>
    </div>
  );
};

export default Login;
