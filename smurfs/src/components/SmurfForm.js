import React, { useState } from "react";

const initialFormValues = {
  name: "",
  age: "",
  height: "",
};

function SmurfForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  return <div></div>;
}

export default SmurfForm;
