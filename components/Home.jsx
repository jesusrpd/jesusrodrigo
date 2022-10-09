import Image from 'next/image'
import Nav from './Nav'

export default function Home (){
  return(
    <header id='home' className='bg-black w-full h-screen'>
      <Nav/>
      <div className='icons-container fixed left-5 top-1/4'>
        <a>
          <Image src="/icons/whatsapp.svg" alt='icon whatsapp' width={40} height={40}/>
        </a>
        <a>
          <Image src="/icons/instagram.svg" alt='icon instagram' width={40} height={40}/>
        </a>
        <a>
          <Image src="/icons/facebook.svg" alt='icon facebook' width={40} height={40}/>
        </a>
        <a>
          <Image src="/icons/github.svg" alt='icon github' width={40} height={40}/>
        </a>
      </div>
      <div className='flex w-full justify-around h-4/5 items-center'>
        <div className='text-center'>
          <p className='text-blue my-1'>HELLO I´M</p>
          <h1 className='text-white my-1'>JESÚS RODRIGO</h1>
          <span className='text-white mt-1 mb-4'>Web developer full stack</span>
          <button className='bg-blue btn-blue mt-2 mx-auto'>Download CV</button>
        </div>
        <Image src="/img/perfil.png" width={300} height={300} alt="imagen de mi perfil"/>
      </div>
    </header>
  )
}