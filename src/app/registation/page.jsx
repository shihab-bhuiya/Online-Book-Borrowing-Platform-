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









// 'use client'
// import { authClient } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";

// const RegisterPage = () => {
//   const [isShowPassword, setIsShowPassowrd] = useState(false);
//   const router = useRouter();
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const handleRegisterFun = async (datum) => {
//     const { name, photoURL, password, email } = datum;
//     const { data, error } = await authClient.signUp.email({
//       name, email, password, image: photoURL, callbackURL: '/',
//     });
//     if (error) toast.error(error.message);
//     else { toast.success("SignUp Successfully"); router.push('/homepage'); }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f5f5f7] p-6">
//       <div className="flex w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">

//         {/* LEFT */}
//         <div className="hidden lg:flex flex-col justify-center gap-8 flex-[0_0_38%] bg-[#1c1c1e] p-12">
//           <div>
//             <h1 className="text-white text-2xl font-bold leading-snug">
//               Book Borrowing<br />Platform
//             </h1>
//             <div className="w-8 h-0.5 bg-blue-600 rounded mt-4" />
//           </div>
//           <p className="text-[#888] text-sm leading-relaxed">
//             Create an account and get instant access to thousands of books available for borrowing.
//           </p>
//           <div className="flex flex-col gap-3">
//             {['Free account, no credit card', 'Thousands of titles available', 'Borrow & return anytime'].map(f => (
//               <div key={f} className="flex items-center gap-3">
//                 <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                // <span className="text-[#aaa] text-sm">{f}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="flex-1 bg-white p-10 flex flex-col justify-center gap-6">
//           <div>
//             <h2 className="text-xl font-bold text-gray-900">Create your account</h2>
//             <p className="text-sm text-gray-400 mt-1">Fill in the details below to get started</p>
//           </div>

//           <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleRegisterFun)}>

//             {/* Name */}
//             <div>
//               <label className="block text-xs font-medium text-gray-500 mb-1.5">Full Name</label>
//               <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-blue-500 transition">
//                 <svg className="w-4 h-4 text-gray-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
//                 <input type="text" placeholder="John Doe" {...register("name", { required: "Name is required" })}
//                   className="flex-1 outline-none text-sm text-gray-800 placeholder:text-gray-300" />
//               </div>
//               {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
//             </div>

//             {/* Photo URL */}
//             <div>
//               <label className="block text-xs font-medium text-gray-500 mb-1.5">Photo URL</label>
//               <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-blue-500 transition">
//                 <svg className="w-4 h-4 text-gray-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
//                 <input type="text" placeholder="https://example.com/photo.jpg" {...register("photoURL", { required: "Photo URL is required" })}
//                   className="flex-1 outline-none text-sm text-gray-800 placeholder:text-gray-300" />
//               </div>
//               {errors.photoURL && <p className="text-red-500 text-xs mt-1">{errors.photoURL.message}</p>}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-xs font-medium text-gray-500 mb-1.5">Email Address</label>
//               <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-blue-500 transition">
//                 <svg className="w-4 h-4 text-gray-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
//                 <input type="email" placeholder="you@example.com" {...register("email", { required: "Email is required" })}
//                   className="flex-1 outline-none text-sm text-gray-800 placeholder:text-gray-300" />
//               </div>
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-xs font-medium text-gray-500 mb-1.5">Password</label>
//               <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 focus-within:border-blue-500 transition">
//                 <svg className="w-4 h-4 text-gray-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>
//                 <input type={isShowPassword ? "text" : "password"} placeholder="Min. 8 characters"
//                   {...register("password", { required: "Password is required" })}
//                   className="flex-1 outline-none text-sm text-gray-800 placeholder:text-gray-300" />
//                 <span className="text-xs text-gray-400 cursor-pointer hover:text-blue-600 select-none"
//                   onClick={() => setIsShowPassowrd(!isShowPassword)}>
//                   {isShowPassword ? "Hide" : "Show"}
//                 </span>
//               </div>
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
//             </div>

//             {/* Terms */}
//             <div className="flex items-center gap-2 text-xs text-gray-500">
//               <input type="checkbox" id="terms" {...register("terms", { required: "You must accept the terms" })}
//                 className="accent-blue-600 w-3.5 h-3.5" />
//               <label htmlFor="terms">
//                 I agree to the <a href="#" className="text-blue-600 font-medium">Terms & Conditions</a>
//               </label>
//             </div>
//             {errors.terms && <p className="text-red-500 text-xs">{errors.terms.message}</p>}

//             {/* Submit */}
//             <button type="submit"
//               className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition">
//               Create Account
//             </button>

//             <div className="flex items-center gap-3 text-xs text-gray-300">
//               <div className="flex-1 h-px bg-gray-100" /> or <div className="flex-1 h-px bg-gray-100" />
//             </div>

//             {/* Google */}
//             <button type="button"
//               className="flex items-center justify-center gap-2 w-full py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-blue-500 transition">
//               <svg width="15" height="15" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.7 2.5 30.2 0 24 0 14.6 0 6.6 5.4 2.7 13.3l7.8 6C12.4 13.1 17.8 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4 7.1-10 7.1-17z"/><path fill="#FBBC05" d="M10.5 28.7A14.8 14.8 0 019.5 24c0-1.6.3-3.2.8-4.7l-7.8-6A23.9 23.9 0 000 24c0 3.9.9 7.5 2.6 10.7l7.9-6z"/><path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.5-5.8c-2 1.4-4.6 2.2-7.7 2.2-6.2 0-11.5-4.2-13.4-9.8l-7.9 6C6.6 42.6 14.6 48 24 48z"/></svg>
//               Continue with Google
//             </button>

//             <p className="text-center text-xs text-gray-400">
//               Already have an account?{' '}
//               <a href="/login" className="text-blue-600 font-semibold">Sign in</a>
//             </p>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default RegisterPage;