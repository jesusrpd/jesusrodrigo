import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='bg-dark'>
        <nav>
          <Image src="/icons/logo.svg" alt="" width={100} height={100} />
          <ul>
            <li>Home</li>
            <li>About me</li>
            <li>Briefcase</li>
            <li>Trajectory</li>
            <li>Services</li>
            <li>Contact me</li>
          </ul>
        </nav>
        <div>
          <a>
            <Image src="/icons/whatsapp.svg" alt='icon whatsapp' width={24} height={24}/>
          </a>
          <a>
            <Image src="/icons/instagram.svg" alt='icon instagram' width={24} height={24}/>
          </a>
          <a>
            <Image src="/icons/facebook.svg" alt='icon facebook' width={24} height={24}/>
          </a>
          <a>
            <Image src="/icons/github.svg" alt='icon github' width={24} height={24}/>
          </a>
        </div>
        <div>
          <p>HELLO I´M</p>
          <h1>JESÚS RODRIGO</h1>
          <span>Web developer full stack</span>
          <button>Download CV</button>
        </div>
        <Image src="/img/perfil.png" width={150} height={150} alt="imagen de mi perfil"/>
      </header>
    </>
  )
}
