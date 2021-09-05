import React, { useEffect, useState } from 'react'
import './css/Form.css'

export default function Login({setShowLogin, setShowHome}) {

    const [data ,setData] = useState()

    const fetchData =async()=>{
        let response = await fetch("http://localhost:3000/users")
        response =await response.json()
        setData(response)
    }

    useEffect(()=>{
        fetchData()
    }, [])
    
    const onLogin=e=>{

        e.preventDefault()

        const {usernameLg,passwordLg} = e.target.elements;

        let isAuth =false
        data.forEach((val)=>{
            if(usernameLg.value===val.username && passwordLg.value===val.password){
                isAuth=true
            }
            if(isAuth){
                return
            }
            else{
                isAuth=false
            }
        })

        if(isAuth){
            console.log("authenticated");
            setShowLogin(false)
            setShowHome(true)

            localStorage.setItem("auth", 1);

        }else{
            console.log("fake user");
        }

    }

    return (
        <div>
            <h3>Login Here</h3>
            <form style={{backgroundColor: 'pink'}} onSubmit={onLogin}>
                <input type="text" id="usernameLg" placeholder="Your UserName" /> <br /><br />
                <input type="password" id="passwordLg" placeholder="Your Password" /><br /><br />
                <input type="submit" value="Login" /> <br /><br />
                <h4 onClick={()=>{setShowLogin(false)}} >not Signup yet Click here</h4>
            </form>
        </div>
    )
}
