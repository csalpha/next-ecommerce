import Head from "next/head";
import Link from "next/link";
import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// const NavBarItem = ({ title, classprops }) => (
//   <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
// );

export default function Layout({ title, children }) {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <>
      <Head>
        <title>{title ? title + " - Next App" : "Next App"}</title>
        <meta name='description' content='Ecommerce Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex min-h-screen flex-col justify-between '>
        <header>
          <nav className='gradient-bg-nav flex h-12 items-center px-4 justify-between shadow-md text-white'>
            <Link legacyBehavior href='/'>
              <a className='text-lg font-bold'>Next App</a>
            </Link>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
              <li className={`mx-4 cursor-pointer my-2 text-lg`}>Cart</li>
              <li className={`mx-4 cursor-pointer my-2 text-lg`}>About</li>
              <li className={`mx-4 cursor-pointer my-2 text-lg`}>Services</li>
              <li className={`mx-4 cursor-pointer my-2 text-lg`}>Contacts</li>
              <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                Login
              </li>
            </ul>
            <div className='flex relative'>
              {!toggleMenu && (
                <HiMenuAlt4
                  fontSize={28}
                  className='text-white md:hidden cursor-pointer'
                  onClick={() => setToggleMenu(true)}
                />
              )}
              {toggleMenu && (
                <AiOutlineClose
                  fontSize={28}
                  className='text-white md:hidden cursor-pointer'
                  onClick={() => setToggleMenu(false)}
                />
              )}
              {toggleMenu && (
                <ul
                  className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
                >
                  <li className='text-xl w-full my-2'>
                    <AiOutlineClose onClick={() => setToggleMenu(false)} />
                  </li>
                  <li className={`mx-4 cursor-pointer my-2 text-lg`}>Cart</li>
                  <li className={`mx-4 cursor-pointer my-2 text-lg`}>About</li>
                  <li className={`mx-4 cursor-pointer my-2 text-lg`}>
                    Services
                  </li>
                  <li className={`mx-4 cursor-pointer my-2 text-lg`}>
                    Contacts
                  </li>
                  <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    Login
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>
          {children}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          sapiente eum, fugiat at perferendis commodi eaque inventore
          praesentium, tenetur sit ipsam porro! Aut animi reiciendis magnam
          commodi? Neque, ullam necessitatibus. Vel maiores reprehenderit hic
          asperiores assumenda at ad culpa expedita ea necessitatibus? Nulla,
          reprehenderit incidunt consectetur consequatur molestiae placeat
          similique, ad nihil aspernatur amet, laudantium sint ratione deleniti
          odit consequuntur.
        </main>
        <footer className='gradient-bg-nav flex h-10 justify-center items-center shadow-inner text-white'>
          <p>
            &copy; {new Date().getFullYear()} Copyright:{" Carlos Serôdio"}
          </p>
        </footer>
      </div>
    </>
  );
}
