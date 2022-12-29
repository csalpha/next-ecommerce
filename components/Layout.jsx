import Head from "next/head";
import Link from "next/link";
import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Store } from "../utils/Store";
// [] {}

export default function Layout({ title, children }) {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const { state } = useContext(Store);
  const { cart } = state;

  console.log("cart: ");
  console.log(cart);

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
              <Link href='/about'>
                <li className={`mx-4 cursor-pointer my-2 text-lg`}>About</li>
              </Link>
              <Link href='/services'>
                <li className={`mx-4 cursor-pointer my-2 text-lg`}>Services</li>
              </Link>
              <Link href='/contacts'>
                <li className={`mx-4 cursor-pointer my-2 text-lg`}>Contacts</li>
              </Link>
              <Link href='/'>
                <li className={`mx-4 cursor-pointer my-2 text-lg`}>
                  {" "}
                  Cart
                  {cart.cartItems.length > 0 && (
                    <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                      {
                        cart.cartItems.reduce((a, c) => a + c.quantity, 0)
                        /* sum of all quantities in the cart items */
                      }
                    </span>
                  )}
                </li>
              </Link>
              <Link href='/login'>
                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                  Login
                </li>
              </Link>
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

                  <Link href='/about'>
                    <li className={`mx-4 cursor-pointer my-2 text-lg`}>
                      About
                    </li>
                  </Link>
                  <Link href='/services'>
                    <li className={`mx-4 cursor-pointer my-2 text-lg`}>
                      Services
                    </li>
                  </Link>
                  <Link href='/contacts'>
                    <li className={`mx-4 cursor-pointer my-2 text-lg`}>
                      Contacts
                    </li>
                  </Link>
                  <Link href='/'>
                    <li className={`mx-4 cursor-pointer my-2 text-lg`}>
                      {" "}
                      Cart
                      {cart.cartItems.length > 0 && (
                        <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                          {
                            cart.cartItems.reduce((a, c) => a + c.quantity, 0)
                            /* sum of all quantities in the cart items */
                          }
                        </span>
                      )}
                    </li>
                  </Link>

                  <Link href='/login'>
                    <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                      Login
                    </li>
                  </Link>
                </ul>
              )}
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='gradient-bg-nav flex h-10 justify-center items-center shadow-inner text-white'>
          <p>
            &copy; {new Date().getFullYear()} Copyright:{" Carlos Serôdio"}
          </p>
        </footer>
      </div>
    </>
  );
}
