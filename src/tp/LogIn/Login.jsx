import {useRef, useState} from "react";
import './style.css'
export default function Login() {
    const [login,setLogin] = useState('')
    // const success = useRef()
    const [password,setPassword] = useState('')
    const [checkLogin,setCheckLogin] = useState(false);
    const [checkPassword,setCheckPassword] = useState(false);
    const [isConnect,setIsConnect] = useState(false);
    const rightPass = 'abdessamad';
    const rightLogin = 'abdessamad@gmail.com';
    const handleChange = (e) => {
        if(e.target.type === 'password'){
            setPassword(e.target.value)
        }else if(e.target.type === 'text'){
            setLogin(e.target.value)
        }
    }
    const handleClick = (e) => {
        e.preventDefault()
        if (password !== rightPass) {
            setCheckPassword(true);
        }
        if(login !== rightLogin) {
            setCheckLogin(true);
        }
        if (login === rightLogin && password === rightPass) {
            setIsConnect(true);
            // setTimeout(()=>{
            //     success.classList.add('active')
            // },100)
            // setTimeout(()=>{
            //     success.classList.remove('active')
            //
            // },3000)

        }
    }
    return (

        <>
            {!isConnect ?
            <form>
                <input type='text' value={login} onChange={handleChange} placeholder="Login"/>
                <br/>
                {checkLogin ? <div className="login-error" style={{color: "red"}}>Passwords is incorrect</div> : ""}
                <br/>
                <input type='password' value={password} onChange={handleChange} placeholder="Password"/>
                {checkPassword ? <div className="login-error" style={{color: "red"}}>Passwords is incorrect</div> : ""}
                <br/>
                <div className="password-error"></div>
                <button type={"button"} onClick={handleClick}>se connecter</button>
            </form> :
            <div className="success" id="success" > you are loged in successfuly abdessamad</div>
            }
            {/*<div className="succes" ref={success} style={{position: "absolute", right: "-500px",boxSizing:"border-box",padding:"20px",background:"black",color:"white",transition:'ease .3s'}}> you are loged in successfuly abdessamad*/}
            {/*</div>*/}
        </>
    )
}