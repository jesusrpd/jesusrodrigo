import Image from "next/image";

export default function Trajectory () {
  return(
    <section id="trajectory" className="w-full h-screen bg-white flex flex-col justify-evenly items-center">
      <h2 className="text-center">Trajectory</h2>
      <p className="text-center w-2/4">Throughout my experience I have been able to work as a full stack web developer and as mentos, which has allowed me to grow as a person and professionally in this field, so I have never stopped learning new technologies and always trying to improve myself every day.</p>
      <div className="bg-light">
        <Image src="/img/map.svg" alt="map curreculir" width={1435} height={517}/>
      </div>
    </section>
  )
}