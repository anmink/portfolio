import React, { useState, useEffect } from 'react';
import { Link as LinkR } from 'react-router-dom';
import { Link } from 'react-scroll';
import down from '../assets/down.svg';

function Navbar() {
  const [click, setClick] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav id='/' className='container '>
      <div
        className={
          visible
            ? 'bg-primary fixed shadow-md flex-row flex-wrap justify-between z-40 w-full py-4 md:py-2 flex items-center px-8 sm:px-16 lg:px-32 xl:px-48 2xl:px-80'
            : '-70px'
        }
      >
        <LinkR>
          <Link
            to='/'
            className='flex z-50 color-y cursor-pointer'
            smooth={true}
            duration={1000}
            onClick={closeMobileMenu}
          >
            Anne Minkenberg
            {/* <img src={down} className='transform -rotate-45 -mb-6 -ml-2' /> */}
          </Link>
        </LinkR>

        <div className='lg:hidden relative z-50' onClick={handleClick}>
          <i
            className={
              click ? 'fas fa-times text-white' : 'fas fa-bars text-white'
            }
          />
        </div>
        <ul
          className={
            click
              ? 'flex flex-col items-center w-full lg:top-0 lg:flex lg:flex-row lg:bg-transparent'
              : 'hidden lg:flex lg:flex-row'
          }
        >
          <li className='flex justify-between pt-10 lg:pt-0 my-8 lg:my-4'>
            <Link
              to='projects'
              smooth={true}
              duration={1000}
              spy={true}
              exact={true}
              offset={-240}
              activeClass='active'
              className='link nav-link focus:bg-red-500'
              onClick={closeMobileMenu}
            >
              Digital 🏠
            </Link>
          </li>
          <li className='flex justify-between mx-8 my-8 md:my-4 md:ml-12 md:mr-12'>
            <Link
              to='about'
              smooth={true}
              duration={1000}
              spy={true}
              offset={-80}
              activeClass='active'
              className='link nav-link focus:bg-red-500'
              onClick={closeMobileMenu}
            >
              Who I am 👷🏼‍♀️
            </Link>
          </li>
          <li className='flex justify-between my-8 md:my-4'>
            <Link
              to='contact'
              smooth={true}
              duration={1000}
              spy={true}
              exact={true}
              offset={-80}
              activeClass='active'
              className='link nav-link focus:bg-red-500'
              onClick={closeMobileMenu}
            >
              Contact 💬
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
