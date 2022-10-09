import Image from "next/image";

export default function Trajectory () {
  return(
    <section id="trajectory" className="w-full h-screen bg-white">
      <h2>Trajectory</h2>
      <div>
        <Image src="/img/map.svg" alt="map curreculir" width={1000} height={600}/>
      </div>
    </section>
  )
}