import { useRef, useState } from "react"

export default function Form(params) {
  const nameRef = useRef()
  const email = useRef()
  const message = useRef()
  const country = useRef()
  const isAccepted = useRef()
  const [isFormSend , setisFormSend ] = useState(false);
  const [errors, setErrors] = useState({});
  // const [data,setData] = u

  const validateForm = () => {
    const nameValue = nameRef.current.value
    const emailValue = email.current.value
    const messageValue = message.current.value
    const isAcceptedValue = isAccepted.current.checked
    let errorsMessages = {}
    if(!nameValue.trim()) {
      errorsMessages.name = "the name is required"
    }
    if(!emailValue.trim()) {
      errorsMessages.email = "the email is required"
    }
    if(!messageValue.trim()) {
      errorsMessages.message = "the message is required"
    }
    if(!country.current.value) {
      errorsMessages.country = "the country is required"
    }
    if(!isAcceptedValue) {
      errorsMessages.isAccepted = "the isAccepted is required"
    }
    setErrors(errorsMessages)
    // if(Object.keys(errors).length === 0) {
    //   setisFormSend(true)
    //   resetForm()
    // }
    // console.log(errors);
    // const filter_dyal_jwix = string => [...string].filter(char => char !== " ").join('')
    // console.log(filter_dyal_jwix(nameValue));
    console.log(errorsMessages,errors);

    return errorsMessages
  }
  const resetForm = () => {
    nameRef.current.value = ''
    email.current.value = ''
    message.current.value = ''
    isAccepted.current.checked = false
  }
  const submitForm = (e) => {
    e.preventDefault()
    validateForm()
    if(Object.keys(validateForm()).length === 0) {
      setisFormSend(true)
      resetForm()
    }
    // resetForm()
  }
  return (

    <>
      <div className="container w-75 mt-3">
    {
      isFormSend
        ?
        <div class="alert alert-success" role="alert">
          <strong>success</strong>
        </div>
        :
        <>
          <h1>Form Validation</h1>
          <form action="">
            <div className="form-group my-3">
              <label >Name</label>
              <input type="text"
                className="form-control"
                ref={nameRef}
                placeholder="write your name ..."
              />
            {errors.name ? <div className="text-danger">{errors.name}</div> : null}
            </div>
            <div className="form-group mt-3">
              <label >Email</label>
              <input type="email"
                className="form-control"
                ref={email}
                placeholder="write your email ..."
                />
              {errors.email ? <div className="text-danger">{errors.email}</div> : null}
            </div>
            <div className="form-group mt-3">
              <label >Message</label>
              <textarea className="form-control" ref={message} placeholder="write your message ..." ></textarea>
              {errors.message ? <div className="text-danger">{errors.message}</div> : null}
            </div>
            <div className="form-group mt-3">
              <label >Country</label>
              <select className="form-control" name="" id="" ref={country}>
                <option value={"MA"}>Morocco</option>
                <option value={'US'}>USA</option>
                <option value={'CA'}>CANADA</option>
              </select>
              {errors.country ? <div className="text-danger">{errors.country}</div> : null}
            </div>
            <div className="form-check mt-3">
              <label className="form-check-label">
                <input type="checkbox" ref={isAccepted} className="form-check-input"/>
                Accept all Conditions
              </label>
              {errors.isAccepted ? <div className="text-danger">{errors.isAccepted}</div> : null}
            </div>
            <button  type="submit" className="btn btn-primary w-100 mt-3" onClick={submitForm} >Submit</button>
          </form>
        </>
    }
    </div>
    </>
  )
}
