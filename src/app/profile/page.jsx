'use client'
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const Profile = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState(user?.name || '');
  const [image, setImage] = useState(user?.image || '');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    setLoading(true);
    const { data, error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Profile updated successfully!');
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="input input-bordered"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        className="input input-bordered"
      />
      <button
        className="btn"
        onClick={handleUpdate}
        disabled={loading}
      >
        {loading ? 'Updating...' : 'Update Profile'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Profile;