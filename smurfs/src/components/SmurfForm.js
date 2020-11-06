import React, { useState } from "react";

const initialFormValues = {
  name: "",
  age: "",
  height: "",
};

function SmurfForm() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="New Smurf Name"
          value={formValues.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Age:
        <input
          type="text"
          name="age"
          placeholder="New Smurf Age"
          value={formValues.age}
          onChange={handleChange}
        />
      </label>

      <label>
        Height:
        <input
          type="text"
          name="height"
          placeholder="New Smurf Height"
          value={formValues.height}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add Smurf</button>
    </form>
  );
}

export default SmurfForm;
