import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Nav () {

  useEffect(()=> {
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('nav');
      nav.classList.toggle('sticky', window.scrollY > 0);
    })
  },[])

  return(
    <nav id='nav' className='nav'>
        <Image src="/icons/logo.svg" alt="" width={50} height={50} />
        <ul className='nav-links'>
          <li>
            <Link href="#home">
              <a className='nav-link text-white'>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#aboutme">
              <a className='nav-link text-white' href='#'>About me</a>
            </Link>
          </li>
          <li>
            <Link href="#briefcase">
              <a className='nav-link text-white' href='#'>Briefcase</a>
            </Link>
          </li>
          <li>
              <a className='nav-link text-white' href='#'>Trajectory</a></li>
          <li>
              <a className='nav-link text-white' href='#'>Services</a></li>
          <li>
            <Link href="#conactme">
              <a className='nav-link text-white' href='#'>Contact me</a>
            </Link>
          </li>
        </ul>
      </nav>
  )
}