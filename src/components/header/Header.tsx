import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { BiBellMinus } from 'react-icons/bi';
import Link from 'next/link';

function Header() {
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    const handleScroll = ()=>{
      if(window.scrollY > 0){
        setscrolled(true)
      }else{
        setscrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return ()=> removeEventListener('scroll', handleScroll)
  }, []);
  return (
    <header className={`${scrolled && "bg-[#E10856] shadow-lg"}`}>
      <div className='flex items-center space-x-2 md:space-x-10'>
        <Image src={'/logo.svg'} alt={"logo"} width={56} height={56} className="cursor-pointer object-contain " />
        <ul className='space-x-4 md:flex hidden'>
          <li className='navLink'>Home</li>
          <li className='navLink'>Movies</li>
          <li className='navLink'>TV Shows</li>
          <li className='navLink'>New </li>
          <li className='navLink'>Popular</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4 text-sm font-light'>
        <AiOutlineSearch className='h-6 w-6 cursor-pointer' />
        <p className='hidden lg:inline'>Kids</p>
        <BiBellMinus className='h-6 w-6 cursor-pointer' />
        <Link href={'/account'}>
          <AiOutlineUser className='h-6 w-6 cursor-pointer' />
        </Link>
      </div>
    </header>
  )
}

export default Header