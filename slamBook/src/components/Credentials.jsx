import React, { useState } from "react";
import "./credentials.css";

function Credentials() {
  const [elements, SetElements] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [profile, setProfile] = useState("profile");
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    conformPassword: "",
  });

  const popUp = () => {
    setShow(!show);
  };

  const del = () => {
    localStorage.removeItem("userData");
  };

  const enterData = (e) => {
    e.preventDefault();
    if (formData.name === "" || formData.email === "") {
      alert("fill all the data to create");
    } else {
      if (formData.password === formData.conformPassword) {
        alert("account created");
        SetElements([...elements, formData.name, formData.email]);
        setProfile(formData.name);
        setUserDetails([
          ...userDetails,
          {
            message: "Acc created on these credentials :",
            name: formData.name,
            email: formData.email,
          },
        ]);
        const storedData = localStorage.getItem("userData");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          console.log(parsedData.name); // Output: John
        }
        localStorage.setItem("userData", JSON.stringify(formData));
        setShow(false); // Hide form after creation (optional)
      } else {
        alert("password incorrect");
      }
    }
  };

  const Change = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert(`Welcome, ${formData.name}`);
  };

  const edit = () => {
    const Change = (e) => {
      const { id, value } = e.target;
      setFormData({
        ...formData,
        [id]: value,
      });
    };
  };

  return (
    <div>
      <button onClick={popUp}>Enter Data</button>

      {/*  */}

      {show && (
        <div className="form">
          <form className="login">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={Change}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email Id:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={Change}
              />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={Change}
              />
            </div>

            <div>
              <label htmlFor="conformPassword">Confirm Password:</label>
              <input
                type="password"
                id="conformPassword"
                value={formData.conformPassword}
                onChange={Change}
              />
            </div>

            <div>
              <button id="register" onClick={enterData}>
                Create Account
              </button>
            </div>

            <div>
              <button className="login" onClick={login}>
                Login
              </button>
            </div>

            <div>
              <button className="profile" id="profile">
                {profile}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="UserDetails">
        {userDetails.map((item, index) => (
          <div key={index} className="details">
            <p>{item.message}</p>
            <p>Name : {item.name}</p>
            <p>Mail : {item.email}</p>
            <button onClick={edit}>Edit</button>
            <button onClick={del}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Credentials;
