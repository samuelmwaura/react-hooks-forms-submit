import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("Woods");
  const [formSubmittedData,setformSubmittedData]= useState([])
  const [errorMessage,setErrorMessage]= useState('');

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
  event.preventDefault();
  if(firstName.length>0){
  const formData = {firstName,lastName}
  const dataArray =[...formSubmittedData,formData]
  setformSubmittedData(()=>dataArray); //the inner callback function returns the formSubmittedData since return is implied
  setFirstName('');
  setLastName('');
}else{
  setErrorMessage('The First Name is required!')
}

  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h3>Submissions</h3>
    {errorMessage.length>0?
    <p style={{color:'red'}}>{errorMessage}</p>:null
  }
    {formSubmittedData.map((data,index)=>{
      return <div key={index}>{data.firstName}  {data.lastName}</div>
    })}
    </>
  );
}

export default Form;
