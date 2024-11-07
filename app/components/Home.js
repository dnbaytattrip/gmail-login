"use client";
import { useRouter } from "next/navigation";
function Home() {
  const router = useRouter();
  return (
    // <section id="contact" class="w-full h-full">
    //   <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    //     <div class="lg:w-2/3 md:w-1/2 bg-blue-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    //       <iframe
    //         width="100%"
    //         height="100%"
    //         class="absolute inset-0"
    //         frameborder="0"
    //         title="map"
    //         src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=London+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
    //       />
    //       <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
    //         <div class="lg:w-1/2 px-6">
    //           <h2 class="font-bold text-gray-dark">ADDRESS</h2>
    //           <p class="mt-1">123 Main Street, London, UK</p>
    //         </div>
    //         <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
    //           <h2 class="font-bold text-gray-dark">EMAIL</h2>
    //           <a
    //             href="mailto:your@email.com"
    //             class="text-teal-500 leading-relaxed"
    //           >
    //             your@email.com
    //           </a>
    //           <h2 class="font-bold text-gray-dark mt-4">PHONE</h2>
    //           <a href="tel:123-456-7890" class="leading-relaxed">
    //             123-456-7890
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div className="relative">
      {" "}
      <button
        onClick={() => router.push("/signin")}
        className="bg-[#bfdbfe] absolute mt-[300px] left-[50%] top-[50%]  px-10 py-3 rounded-full text-black"
      >
        Continue with Google
      </button>
    </div>
  );
}

export default Home;
