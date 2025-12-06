import React, { useState } from "react";

function HookProject() {
  //? State for each input field

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    gender: "",
    acceptTerms: false,
    favorite: "",
    comments: "",
  });

  //!General Handelers
  const handleChange = (e) => {
    //? Get the name value and type of input
    const { name, value, checked } = e.target;
    //*  update the State
    setFormData((prevData) => {
      //console.log(prevData);
      //console.log(name)
      return {
        ...prevData,
        [name]: name === "checkbox" ? checked : value,
      };
    });
  };

  //* Handle Submit
  const handleSubmit = (e) => {
    //? prevent page refreshing
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>React Hook Project using by Form!</h2>
      <div>
        <label>
          Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="name"
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Age:
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            type="number"
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Email:
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Password:
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Gender:
          <input
            name="gender"
            value="Male"
            onChange={handleChange}
            checked={formData.gender === "Male"}
            type="radio"
          />
          Male
        </label>
      </div>
      <div>
        <label>
          <input
            name="gender"
            value="Female"
            onChange={handleChange}
            checked={formData.gender === "Female"}
            type="radio"
          />
          Female
        </label>
      </div>
      <br />
      <div>
        I accept term & condition
        <input
          name="acceptTerms"
          value={formData.acceptTerms}
          onChange={handleChange}
          required
          type="checkbox"
        />
      </div>
      <br />

      <div>
        <label>
          Favorite Fruits:
          <select
            name="favorite"
            value={formData.favorite}
            onChange={handleChange}
            id=""
          >
            <option value="">Chose</option>
            <option value="Apple">Apple</option>
            <option value="Banana">Banana</option>
            <option value="Orange">Orange</option>
          </select>
        </label>
      </div>
      <div>
        comments:
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          rows="4"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default HookProject;
