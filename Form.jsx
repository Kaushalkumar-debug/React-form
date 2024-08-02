import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const handName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const [fatherName, setFatherName] = useState("");
  const handFatherName = (e) => {
    console.log(e.target.value);
    setFatherName(e.target.value);
  };
  const [number, setNumber] = useState("");
  const handNumber = (e) => {
    console.log(e.target.value);
    setNumber(e.target.value);
  };
  const [email, setEmail] = useState("");
  const handEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handpassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          placeholder="enter any name"
          value={name}
          onChange={handName}
        ></input>
        <br />
        <br />
        FatherName:
        <input
          type="text"
          placeholder="enter a father name"
          value={fatherName}
          onChange={handFatherName}
        ></input>
        <br />
        <br />
        contactNo:
        <input
          type="number"
          placeholder="enter a phone number"
          value={number}
          onChange={handNumber}
        ></input>
        <br />
        <br />
        email:
        <input
          type="email"
          placeholder="enter a email id"
          value={email}
          onChange={handEmail}
        ></input>
        <br />
        <br />
        password:
        <input
          type="password"
          placeholder="enter a password"
          value={password}
          onChange={handpassword}
        ></input>
        <br />
        <br />
        <button type="submit">Submit</button>
      </label>
    </form>
  );
};

export default Form;
