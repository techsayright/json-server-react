import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

export const SignUp = ({setShowLogin}) => {
    const [data ,setData] = useState()
    const [isUsernameExist, setIsUsernameExist]= useState(false)

    /******************* 
    @Purpose : get method api call
    @Parameter : {}
    @Author : DARSH
    ******************/
    const fetchData =async()=>{
        let response = await fetch("http://localhost:3000/users")
        response =await response.json()
        setData(response)
    }

    useEffect(()=>{
        fetchData()
    }, [])


    /******************* 
    @Purpose : username Exist or not Checker
    @Parameter : {}
    @Author : DARSH
    ******************/
    const userExist = e=>{
        
        let isExist =false
        data.forEach((value)=>{
            if(e.target.value===value.username){
                isExist=true
            }
            if(isExist){
                setIsUsernameExist(true)
                console.log("exist");
                return
            }
            else{
                setIsUsernameExist(false)
                console.log("not");
                isExist=false
            }
        })

    }
    

    /******************* 
    @Purpose : post method to send data api
    @Parameter : {}
    @Author : DARSH
    ******************/
    const sendDataToJson=(username,password)=>{

        let data= {username, password}

        fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
            
        }).then((res)=>{
            console.log(res);
        })
    }

    /******************* 
    @Purpose : main signup handler
    @Parameter : {event}
    @Author : DARSH
    ******************/
    const formHandler=event=>{
        event.preventDefault();

        const {username, password}= event.target.elements;

        if(username.value.trim().length===0 || password.value.trim().length===0){
            return false
        }

        sendDataToJson(username.value, password.value);

        alert("Data Added into JSON");
        alert("Click on Below link for login");

        username.value=""
        password.value=""
    }

    return (
        <div>
            <h3>SignUp Form</h3>
            <form onSubmit={formHandler}>
                <h2>{isUsernameExist ? 'This Username is already exist...please! enter another' : 'username should be unique'}</h2>
                <input type="text" id="username" placeholder="Enter New UserName" onBlur={userExist}/> <br /><br />
                <input type="password" id="password" placeholder="Create Password" /><br /><br />
                <input type="submit" value="Add" disabled={isUsernameExist}/> <br /><br />
                <h4 onClick={()=>{setShowLogin(true)}} >Already Signed up click Here for Login</h4>
            </form>
        </div>
    )
}
