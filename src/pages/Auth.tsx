import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

function Auth() {
  const [auth, setAuth] = useState<"signin" | "signup">("signin");

  const toggleAuth = (state: "signin" | "signup") => {
    setAuth(state)
  };

  return (
    <>
      <Head>
        <title>Auth</title>
        <meta
          name="description"
          content="For watching movies you should sign to app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Image
        src={"/logo.svg"}
        alt={"logo"}
        width={70}
        height={70}
        className="absolute left-4 top-4 cursor-pointer object-contain "
      />
      <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:mx-14">
        <h1 className="text-4xl font-semibold">{auth === 'signup' ? "Sign Up" : "Sign In"}</h1>
        <div className="space-y-4">
          <label className="w-full inline-block">
            <input type="text" placeholder="Email" className="input" />
          </label>
          <label className="w-full inline-block">
            <input type="password" placeholder="Password" className="input" />
          </label>
        </div>
        {auth === 'signin' ? (
        <button type="submit" className="w-full bg-[#E10856] py-3 font-semibold ">
          Sign In
        </button>)
        :  (
          <button type="submit" className="w-full bg-[#E10856] py-3 font-semibold ">
          Sign Up
        </button>
        )}



        {auth === "signin" ? (
          <div className="text-[grey]">
            Not yet account
            <button type="button"
              className="text-white hover:underline"
              onClick={() => toggleAuth("signup")}
            >
              Sign up Now
            </button>
          </div>
        ) : (
          <div className="text-[grey]">
            Already have account
            <button type="button"
              className="text-white hover:underline"
              onClick={() => toggleAuth("signin")}
            >
              Sign In
            </button>
          </div>
        )}
      </form>
    </>
  );
}

export default Auth;
