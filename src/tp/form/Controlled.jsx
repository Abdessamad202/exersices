import { useState } from "react";

export default function Controlled(params) {
  //fist name / last name / age / filter d'etude /date de naissance
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();
  const [filier, setFilier] = useState();
  const [birth, setBirth] = useState();
  const [errors,setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!firstName.trim()){
      // setErrors(prevState=>{...prevState,'firstName' : 'the first name is required' })
      console.log(errors);
    }
    if(!lastName.trim()){
      setErrors(prevState=>prevState.lastName = 'the last name is required')
      console.log(errors);
    }
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <label></label>
      <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
      <br/>
      <label></label>
      <input type="email" onChange={(e) => setLastName(e.target.value)} value={lastName} />
      <br/>
      <label></label>
      <input type="number" onChange={(e) => setAge(e.target.value)} value={age} />
      <br/>
      <label></label>
      <select name="" id="" onChange={(e) => setFilier(e.target.value)}>
        <option>select filier</option>
        <option value="DEV-MA">DEV-MA</option>
        <option value="GE">GE</option>
        <option value="DEV-FS">DEV-FS</option>
      </select>
      <br/>
      <label>
      </label>
      <input type="date" onChange={(e) => setBirth(e.target.value)} value={birth} />
      <br/>
      <button type="submit">submit</button>
    </form>
    </>
  )
};
