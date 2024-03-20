"use client";

import Image from 'next/image'
import Link from 'next/link'
import shoeslogo from './logoshoes.jpg'
import { useEffect, useState } from "react";
//import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Headers = () => {
  let login=true
 // const [provider, setprovider] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false);
 /* useEffect(() => {
    (async () => {
      const res = await getProviders();
      setprovider(res);
    })();
  }, []); */
  return (
    <nav className='flex justify-between h-16 w-full mb-16 pt-3 bg-teal-400'>
      <Link className='flex items-center gap-2' href='/'>

          <Image
            src={shoeslogo}
            alt='shoeslogo'
            width={30}
            height={30}
            className='object-contain ml-3'
          />
          <p className='logo_text'>Nike</p>

      </Link>

      {/* Desktop navigation */}
      <div className='sm:flex hidden items-center'>
        {login ? (
          <div className='flex gap-3 md:gap-5'>
            <Link className='black_btn text-white' href='/create-prompt'>
  
            </Link>
            <button type='button' className='outline_btn'>
              Sign out
            </button>
          </div>
        ) : (
          <button type='button' className='black_btn'>
            Sign in
          </button>
        )}
      </div>

      {/* Mobile navigation */}
      <div className='flex items-center relative'>
        {login ? (
          <div className='flex items-center'>
            <Image
              src={shoeslogo}
              alt='shoeslogo'
              className='rounded-full cursor-pointer'
              width={30}
              height={30}
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
            {toggleDropdown && (
              <div className='dropdown absolute right-0 mt-1 bg-white rounded-lg shadow-md'>
                <Link className='dropdown_link block px-4 py-2 text-gray-800 hover:bg-gray-200' href='/profile'>
         
                    Profile
        
                </Link>
                <button
                  className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200'
                  type='button'
                  onClick={() => setToggleDropdown(false)}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button type='button' className='black_btn'>
            Sign In
          </button>
        )}
      </div>
    </nav>
  )
}

export default Headers