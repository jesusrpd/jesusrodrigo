import Image from 'next/image'

export default function Footer(){
  return(
    <footer className="bg-white w-full flex items-center justify-around py-16">
      <div>
        <p className='my-8 text-center'>Hecho por Jesús Rodrigo.</p>
        <p className='my-8 text-center'>México, CDMX</p>
        <p className='my-8 text-center'>jesusrodrigo881@gmail.com</p>
        <p className='my-8 text-center'>Tel: +52 5537046181</p>
        <p className='my-8 text-center'>Contactame si requieres mis servicios o para colaborar<br/> en algun proyecto.</p>
      </div>
      <form className='form'>
        <h2 className='text-center mb-4'>CONTACT ME</h2>
        <div className='form-input-container'>
          <input className='form-input' type="text" placeholder='Name'/>
          <div className='form-input-icon'>
            <Image src="/icons/user.svg" width={20} height={20} alt="user icon"/>
          </div>
        </div>
        <div className='form-input-container'>
          <input className='form-input' type="text" placeholder='Gamil'/>
          <div className='form-input-icon'>
            <Image src="/icons/gmail.svg" width={20} height={20} alt="gmail icon"/>
          </div>
        </div>
        <div className='form-input-container'>
          <input className='form-input' type="text" placeholder='Message (optional)'/>
          <div className='form-input-icon'>
            <Image src="/icons/message.svg" width={20} height={20} alt="message icon"/>
          </div>
        </div>
        <button className='btn-blue bg-blue'>Send</button>
      </form>
    </footer>
  )
}