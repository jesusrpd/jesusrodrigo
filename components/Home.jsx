import Image from 'next/image'

export default function Home (){
  return(
    <header className='bg-home w-full h-screen'>
      <nav className='nav'>
        <Image src="/icons/logo.svg" alt="" width={50} height={50} />
        <ul className='nav-links'>
          <li><a className='nav-link text-white' href='#'>Home</a></li>
          <li><a className='nav-link text-white' href='#'>About me</a></li>
          <li><a className='nav-link text-white' href='#'>Briefcase</a></li>
          <li><a className='nav-link text-white' href='#'>Trajectory</a></li>
          <li><a className='nav-link text-white' href='#'>Services</a></li>
          <li><a className='nav-link text-white' href='#'>Contact me</a></li>
        </ul>
      </nav>
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
          <button className='bg-blue btn-blue'>Download CV</button>
        </div>
        <Image src="/img/perfil.png" width={300} height={300} alt="imagen de mi perfil"/>
      </div>
    </header>
  )
}