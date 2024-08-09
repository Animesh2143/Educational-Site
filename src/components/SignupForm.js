import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => { 

    const navigate= useNavigate();

    const [showPasswordA,setShowPasswordA]=useState(false);
    const [showPasswordB,setShowPasswordB]=useState(false);
    const [formData,setFormData]=useState({firstname:"",lastname:"",email:"",password:"",confirmpassword:""});
    const [accountType,setAccountType]=useState("Student");

    function changeHandler(event){
        setFormData((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }


    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmpassword){
            toast.error("Password not matched");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Acccount Created");
        const FinalData={...formData,accountType};
        console.log(FinalData);
        navigate("/dashboard");
    }


  return (
    <div>
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${accountType==="Student" ? 
            "bg-richblack-900 text-richblack-5" :
            "bg-transparent text-richblack-200" }  py-2 px-5 rounded-full transition-all duration-200`}
             onClick={()=>setAccountType("Student")}>
            Student</button>
            <button  className={`${accountType==="Instructor" ? 
            "bg-richblack-900 text-richblack-5" :
            "bg-transparent text-richblack-200" }  py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("Instructor")}>
            Instructor</button>
        </div>

        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-6 mt-6'>
            <div className='flex flex-row gap-x-3 w-full'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    First Name<sup className='text-pink-200'>*</sup></p>
                    <input  className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px] border-b border-b-richblack-25'
                    type='text' required value={formData.firstname}
                    placeholder='Enter First Name' name='firstname' onChange={changeHandler}/>
                </label>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Last Name<sup className='text-pink-200'>*</sup></p>
                    <input  className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px] border-b border-b-richblack-25'
                     type='text' required value={formData.lastname}
                    placeholder='Enter Last Name' name='lastname' onChange={changeHandler}/>
                </label>
            </div>

            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                E-mail Address<sup className='text-pink-200'>*</sup></p>
                <input  className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px] border-b border-b-richblack-25'
                required type="email" value={formData.email} name='email'
                onChange={changeHandler} placeholder='Enter E-mail Address'/>
            </label>

            <div className='flex flex-row gap-x-5 w-full'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Password<sup className='text-pink-200'>*</sup></p>
                    <input  className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px] border-b border-b-richblack-25'
                     required type={showPasswordA ? ("text") : ("password")} value={formData.password}
                    onChange={changeHandler} name='password' placeholder='Enter Password'/>
                    
                    <span className='absolute right-3 top-[40px] cursor-pointer text-white'
                    onClick={()=> setShowPasswordA((prev)=>!prev)}>
                    {showPasswordA ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) 
                    : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input  className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px] border-b border-b-richblack-25'
                     required type={showPasswordB ? ("text") : ("password")} value={formData.confirmpassword}
                    onChange={changeHandler} name='confirmpassword' placeholder='Renter your Password'/>
                    
                    <span className='absolute right-3 top-[40px] cursor-pointer text-white'
                    onClick={()=> setShowPasswordB((prev)=>!prev)}>
                    {showPasswordB ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) 
                    : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>

            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Create Account</button>

        </form>
    </div>
  )
}

export default SignupForm