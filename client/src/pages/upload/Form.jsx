import React, { useState } from "react";
import axios from "../../axios/config";

const Form = () => {
  const [values, setValues] = useState({
    fName: "",
    lName: "",
    place: "",
    Experience: "",
  });
  const [image, setImage] = useState('');
  const handleImage = (event) => {
    const formData = new FormData();
    formData.append('Image', event.target.files[0])
    setImage(formData);
  };
  const handleData = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fullData = {
      values,
      image,
    };
    try {
        
        //    const response = await axios.post('/upload',fullData)
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          value={values.fName}
          placeholder="First Name"
          name="fName"
          onChange={handleData}
        />
        <br />
        <input
          type="text"
          value={values.lName}
          placeholder="Last Name"
          name="lName"
          onChange={handleData}
        />
        <br />
        <input
          type="text"
          value={values.place}
          placeholder="Place"
          name="place"
          onChange={handleData}
        />
        <br />
        <input
          type="text"
          value={values.Experience}
          placeholder="Experience"
          name="Experience"
          onChange={handleData}
        />
        <br />
        <input
          type="file"
          placeholder="Image"
          name="Image"
          accept="image/*"
          onChange={handleImage}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
