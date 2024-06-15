import React, { useState } from 'react'
import toast from "react-hot-toast"
import axios from "axios"
const Form = () => {
    const [email,setemail]=useState("")
    const [contact,setcontact]=useState("")
    const [query,setquery]=useState("")
    const submithandler=async(e)=>{
        e.preventDefault();
        const {data}=await axios.post("https://hack-the-mountain.onrender.com/query",{
            email,contact,query
        })
        toast.success(data.message)
        setemail("")
        setquery("")
        setcontact("")
    }

    return (
        <div className='form flex w-[100%] justify-around items-center ml-[10rem]'>
            <p className='text-[4rem] w-[40%]'>Fill the form for any queries and we will contact you soon!!</p>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={submithandler}>
                            <div className="login__field">
                                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="login__input" placeholder="Email"/>
                            </div>
                            <div className="login__field">
                                <input type="text" value={contact} onChange={(e)=>setcontact(e.target.value)} className="login__input" placeholder="Contact No."/>
                            </div>
                            <div className="login__field">
                                <input type="text" value={query} onChange={(e)=>setquery(e.target.value)} className="login__input" placeholder="Query"/>
                            </div>
                            <button className="button login__submit">
                                <span className="button__text">send your query</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
