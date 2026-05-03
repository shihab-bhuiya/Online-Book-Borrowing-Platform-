'use client'
import { authClient } from "../../lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";

const Profile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Session is still loading
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  // Session loaded but no user found
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-red-500">User not found. Please log in.</p>
      </div>
    );
  }

  // Session loaded and user exists
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">

        {/* Profile Image */}
        {user.image ? (
          <Image
            src={user.image || <CgProfile />}
            alt="Profile"
            height={96}
            width={96}
            className="mx-auto rounded-full border-4 border-blue-500"
          />
        ) : (
          <div className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 bg-blue-100 flex items-center justify-center">
            <span className="text-3xl font-bold text-blue-500">
              {user.name?.charAt(0).toUpperCase() ?? "?"}
            </span>
          </div>
        )}

        {/* Name */}
        <h2 className="text-xl font-semibold mt-4">{user.name}</h2>

        {/* Email */}
        <p className="text-gray-500">{user.email}</p>

        {/* Update Button */}
        <Link
          href={"/updatepage"}
          className="mt-5 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => toast("Redirecting to update profile!")}
        >
          Update Info
        </Link>

      </div>
    </div>
  );
};

export default Profile;