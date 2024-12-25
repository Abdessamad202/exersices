import { useRef, useState } from "react"

export default function Form(params) {
  const nameRef = useRef()
  const email = useRef()
  const message = useRef()
  const country = useRef()
  const isAccepted = useRef()
  const [isFormSend , setisFormSend ] = useState(false);
  const submitForm = (e) => {
    e.preventDefault()
    validateForm()
    // setisFormSend(true)
    // resetForm()
  }
  const validateForm = () => {
    const nameValue = nameRef.current.value
    const emailValue = email.current.value
    const messageValue = message.current.value
    const isAcceptedValue = isAccepted.current.checked
    const filter_dyal_jwix = string => [...string].filter(char => char !== " ").join('')
    console.log(filter_dyal_jwix(nameValue));

  }
  const resetForm = () => {
    nameRef.current.value = ''
    email.current.value = ''
    message.current.value = ''
    isAccepted.current.checked = false
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
          <form action="" onSubmit={submitForm}>
            <div className="form-group my-3">
              <label >Name</label>
              <input type="text"
                className="form-control"
                ref={nameRef}
                placeholder="write your name ..."
              />
            </div>
            <div className="form-group mt-3">
              <label >Email</label>
              <input type="email"
                className="form-control"
                ref={email}
                placeholder="write your email ..."
                />
            </div>
            <div className="form-group mt-3">
              <label >Message</label>
              <textarea className="form-control" ref={message} placeholder="write your message ..." ></textarea>
            </div>
            <div className="form-group mt-3">
              <label >Country</label>
              <select className="form-control" name="" id="" ref={country}>
                <option value={"MA"}>Morocco</option>
                <option value={'US'}>USA</option>
                <option value={'CA'}>CANADA</option>
              </select>
            </div>
            <div className="form-check mt-3">
              <label className="form-check-label">
                <input type="checkbox" ref={isAccepted} className="form-check-input"/>
                Accept all Conditions
              </label>
            </div>
            <button  type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
          </form>
        </>
    }
    </div>
    </>
  )
}
