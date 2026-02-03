import { useState } from "react";

function Forms() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((formData) => {
      return { ...formData, [fieldName]: newValue };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">FullName: </label>
      <input
        placeholder="enter your name"
        id="fullName"
        type="text"
        value={formData.fullName}
        name="fullName"
        onChange={handleInputChange}
      ></input>
      <br></br>

      <label htmlFor="userName">UserName: </label>
      <input
        placeholder="enter your username"
        id="userName"
        type="text"
        value={formData.userName}
        name="userName"
        onChange={handleInputChange}
      ></input>
      <br></br>

      <label htmlFor="password">Password: </label>
      <input
        placeholder="enter your password"
        id="password"
        type="password"
        value={formData.password}
        name="password"
        onChange={handleInputChange}
      ></input>
      <br></br>
      <button>Submit</button>
    </form>
  );
}

export default Forms;