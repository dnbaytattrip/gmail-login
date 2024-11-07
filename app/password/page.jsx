'use client'
import React from 'react'
import { useRouter } from "next/navigation";
function page() {
    const router = useRouter();
  return (
    <div>
         <div className='flex flex-col justify-center items-center mt-[100px]'>
      <img src="/images/google.png"  width={95} height={35}/>
      <div className=" ">
        <div className="text-start">
        <p className='font-medium text-xl mt-5'>Sign in</p>
        </div>
        <input className='w-[350px] px-3 py-3 border border-gray-300 outline-none rounded-md mt-5 placeholder:pl-5' type="text" placeholder="Enter your email address "/>
        <p className='text-black text-sm mt-2'>show password</p>
        <p className='text- text-sm mt-2'>Not your computer? Use Guest mode to sign in privately.</p>
        <p className='text-[#1a73e8] text-sm mt-2'>Learn more about using Guest mode</p>
        <div className="flex justify-between mt-3">
          <p className='text-[#1a73e8] text-sm mt-7 text-center'>Create account</p>
          <button  onClick={() => router.push("/loading")} className=' bg-[#1a73e8] text-white px-3 py-2 border border-gray-300 outline-none rounded-full mt-5'>Next</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page