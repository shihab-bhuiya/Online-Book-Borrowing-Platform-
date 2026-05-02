'use client'
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import Image from 'next/image';

const UpdatePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState(user?.name || '');
  const [image, setImage] = useState(user?.image || '');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Profile updated successfully!');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 m-5 rounded-2xl p-4">
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 space-y-6">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-white text-center">
          Update Profile
        </h2>

        {/* Image Preview */}
        <div className="flex justify-center">
          <Image
            src={user?.image || "https://i.ibb.co/2kR9r3K/default-avatar.png"}
            alt="Profile" height={40} width={40}
            className="w-24 h-24 rounded-full object-cover border-4 border-white/20 shadow-md"
          />
        </div>

        {/* Name Input */}
        <div>
          <label className="text-sm text-gray-300">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full mt-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image Input */}
        <div>
          <label className="text-sm text-gray-300">Profile Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            className="w-full mt-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-medium disabled:opacity-50"
        >
          {loading ? 'Updating...' : 'Update Profile'}
        </button>

      </div>
    </div>
  );
};

export default UpdatePage;