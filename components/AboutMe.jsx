export default function AboutMe(){
  return(
    <main className="w-full h-screen bg-white flex justify-around items-center">
      <div className="text-center">
        <h2 className="mb-8">ABOUT ME</h2>
        <p>Soy una persona comprometida, dedicado<br/> a lo que me gusta y siempre buscando<br/> mejorar.</p>
        <p>Disfruto trabajar en equipo, esperando<br/> aportar desde mi experiencia y tambien<br/> aprender de los demas.</p>
      </div>
      <div className="mosaico-container">
        <div className="mosaico-item"></div>
        <div className="mosaico-item"></div>
        <div className="mosaico-item"></div>
        <div className="mosaico-item"></div>
      </div>
    </main>
  )
}