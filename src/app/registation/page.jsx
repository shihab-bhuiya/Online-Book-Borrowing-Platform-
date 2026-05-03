/** @format */
'use client'
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [isShowPassword,setIsShowPassowrd] = useState(false);
    const router = useRouter();

  const { register,handleSubmit,formState: { errors }} = useForm();

  const handleRegisterFun = async (datum) => {

    const {name,photoURL,password,email} = datum;
    // console.log(datum,"Data");

    const {data,error} = await authClient.signUp.email({   
    name: name, // required
    email: email, // required
    password: password, // required
    image: photoURL,
    callbackURL: '/',
  });
  console.log(data, error);
  if(error){
    toast.error(error.message);
  }
  else{
     toast.success("SignUp Successfully");
      router.push('/homepage')
  }
  }

  return (
   <div className="container mx-auto p-10 flex items-center justify-center bg-gray-200">
      <div className="bg-white w-full max-w-md p-8 rounded-md shadow">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Register your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFun)}>
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              {...register("name" ,{required:"name is required"})}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded bg-gray-100 focus:outline-none"
            />
            {
              errors.name && <p className="text-red-500">{errors.name.message}</p>
            }
            {

            }
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm mb-1">Photo URL</label>
            <input
              type="text"
                {...register("photoURL" ,{required:"photo URL is required"})}
              placeholder="Enter your photo URL"
              className="w-full px-3 py-2 border rounded bg-gray-100 focus:outline-none"
            />
            {
              errors.photoURL && <p className="text-red-500">{errors.photoURL.message}</p>
            }
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              {...register("email" ,{required:"email is required"})}
              placeholder="Enter your email address"
              className="w-full px-3 py-2 border rounded bg-gray-100 focus:outline-none"
            />
            {
              errors.email && <p className="text-red-500">{errors.email.message}</p>
            }
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm mb-1">Password</label>
            <input
              type={isShowPassword ? "text" : "password"}
              {...register("password" ,{required:"password is required"})}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded bg-gray-100 focus:outline-none"
            />
            <span className="absolute right-3 top-8 " onClick={()=> setIsShowPassowrd(!isShowPassword)}>
              {isShowPassword ? "Hide" :"Show" }</span>
            {
              errors.password && <p className="text-red-500">{errors.password.message}</p>
            }
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" id="terms" {...register("terms", { required:"you must accept the terms and conditions" })} />
            <label htmlFor="terms">Accept Terms & Conditions</label>
            {
              errors.terms && <p className="text-red-500">{errors.terms.message}</p>
            }
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;