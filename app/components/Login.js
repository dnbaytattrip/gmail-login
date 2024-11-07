"use client";

import { Form, Formik } from "formik";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { site } from "../config/index";
import useMockLogin from "../hooks/useMockLogin";
import CheckboxField from "./CheckboxField";
import TextfieldWrapper from "./TextfieldWrapper";

function Login({ login }) {
  const [showPassword, setShowPassword] = useState(false);

  const initialvalues = {
    email: "",
    password: "",
    remember: "",
  };

  // const { login } = useMockLogin();

  const handleSubmit = (values, formik) => {
    const { email, password } = values;

    const submitValues = {
      site: site,
      email: email,
      password: password,
      skipcode: "",
    };

    login(submitValues, formik);

    // console.log(submitValues);
  };

  return (
    <div className="mt-2 lg:mt-5 container flex flex-col items-center lg:items-start lg:flex-row gap-6 ">
      <div className="lg:bg-black lg:w-[385px] px-6 pt-6 pb-[46px]">
        <p className="font-medium">Log Into Account</p>

        <div className="mt-10 w-[325px]">
          <Formik
            initialValues={initialvalues}
            // validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form className="">
                <TextfieldWrapper
                  name="email"
                  label="E-mail Address"
                  type="email"
                  required
                />
                <div className="mt-[29px] relative">
                  <TextfieldWrapper
                    name="password"
                    label="Password"
                    autoComplete="on"
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <div className="absolute w-[60px]  right-0 top-0 bottom-0 bg-white/10 text-[23px] text-black/80 cursor-pointer">
                    <span
                      className="flex mt-[14px]  justify-center items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                    </span>
                  </div>
                </div>

                <div className=" mt-[20px] flex justify-between items-center">
                  <CheckboxField name="remember" label="Remember me" />
                  <p className="text-custom-amber/90 hover:underline cursor-pointer">
                    Forgot Password
                  </p>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full font-Arimo bg-transparent hover:bg-custom-yellow border-2 border-custom-amber text-custom-amber py-[6px] rounded uppercase transition-all duration-300"
                >
                  LOG INTO MY ACCOUNT
                </button>
                <button
                  type="button"
                  className="mt-5 w-full font-Arimo bg-transparent hover:bg-white/40 border-2 border-white text-white py-[6px] rounded uppercase transition-all duration-300"
                >
                  CREATE NEW ACCOUNT
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="flex-1 text-white/90">
        <p className="font-bold text-white">
          The Ultimate Erotic Entertainment
        </p>
        <p className="mt-[10px] text-sm leading-[21px]">
          We have been online since 1997 and are the world’s largest adult
          directory with over 100 locations worldwide.We pride ourselves in
          quality viewers, quality results, customer service and advertiser
          satisfaction.
        </p>

        <p className="mt-5 font-bold text-white">
          What Types of Ads Do You Offer?
        </p>
        <p className="mt-[10px] text-sm leading-[21px]">
          We offer a wide variety of advertising options. Most advertisers start
          with a standard ad or visiting ad, and then customize their ads with
          such options as VIP upgrades or Premier Services to drive even more
          traffic to them. Both standard and visiting ads include an elegant
          full page ad with up to 8 photos.
        </p>

        <p className="mt-10 font-bold text-white">
          What Does My Purchase Cover?
        </p>
        <p className="mt-[10px] text-sm leading-[21px]">
          By purchasing an ad on the Eros Guide, you have secured a beautifully
          laid-out advertisement on the premier website for adult entertainment
          services. Since 1997 we have been dedicated to bringing you high
          quality traffic, and it shows. Of course every provider is unique and
          we cannot guarantee you a specific number of leads from your
          advertisement. But we do know what it takes to maintain great site
          traffic – both quality and quantity – and what types of things you can
          do to take maximum advantage of that traffic. Which is why at Eros you
          have access to the best customer service and sales staff in the
          industry. We are here to answer your questions and help you make the
          most of your advertising experience with the Eros Guide.
        </p>
      </div>
    </div>
  );
}

export default Login;
