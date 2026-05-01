'use client'
import React from 'react';
import NavLink from '@/component/shared/NavLink';
import Image from 'next/image';
import logo from "../../assets/logo.png";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
// import { RxAvatar } from 'react-icons/rx';

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
 console.log("USer",session);
 const user = session?.user;
    const link = <>
        <div className='gap-4 flex' > 
                    <NavLink href={'/homepage'}>Home </NavLink>
                    <NavLink href={'/allBooks'}>All Books </NavLink>
                    <NavLink href={'/profile'}>Profile </NavLink>
                    </div>
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm container mx-auto p-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <Image src={logo} alt="logo" height={30} width={30} />
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <div className='flex-col justify-center'> 
   <NavLink href={'/homepage'}>  <Image src={logo} alt='logo' width={120} height={180} /> </NavLink>
    {/* <NavLink href={'/homepage'} className="btn btn-ghost text-xl">Book Borrowing</NavLink> */}
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    {link}
  </div>
  { isPending ? ( <div className='navbar-end'> <span className="loading loading-dots loading-xl"></span></div>) : user ? <div className="navbar-end ">
    <h2 className='m-2'>{user?.name}</h2>

      <Image src={user?.image_url } alt='image' height={30} width={30} className='rounded-xl'/>
    <button className='btn' onClick={async ()=>await authClient.signOut()}>Log Out</button>

  </div> :
  <div className='navbar-end'>

    <NavLink href="/login"> <button className='btn  '>LogIn </button></NavLink>
  </div>}
</div>
    );  
};

export default NavBar;