import React, { useState } from "react";
function Form(){
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmitedData] = useState([]);
  function handleFirstNameChange(event){
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event){
    setLastName(event.target.value);
  }

  const [errors, setErrors] = useState([]);

  function handleSubmit(event){
    event.preventDefault();
    const formData = { firstName: firstName, lastName: lastName};

    if (firstName.length > 0){
      const formData = { firstName: firstName, lastName: lastName};
    const dataArray = [...submittedData, formData];
    setSubmitedData(dataArray);
    setFirstName("");
    setLastName("");  
    setErrors([])
    }else {
      setErrors(["First name is required!"]);
    }


  };
  const listOfSubmissions = submittedData.map((data,index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={firstName} />
      <button type="submit">Submit</button>
      </form>
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}
export default Form;