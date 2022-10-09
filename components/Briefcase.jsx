import Image from "next/image";

export default function Briefcase (){
  return(
    <section id="briefcase" className="briefcase w-full h-screen bg-black">
      <h2 className="text-white mb-16">BRIEFCASE</h2>
      <div className="briefcase-container">
        <div id="pack" className="briefcase-item-v briefcase-item mr-4">
          <h2 className="mt-2 ml-2 briefcase-item-title">Pack&Pack</h2>
          <Image src="/img/pack.png" width={200} height={200} alt="image pack&pack"/>
          <div className="flex flex-col items-center briefcase-btn">
            <Image alt="arrow up icon" src="/icons/arrow_up.svg" width={10} height={10}/>
            <span>Ver más</span>
          </div>
        </div>
        <div className="briefcase-items">
          <div id="jared" className="briefcase-item-h briefcase-item mb-4 mr-4">
            <h2 className="mt-2 ml-2 briefcase-item-title text-white">JARED´S LANDSCAPE</h2>
            <Image src="/img/jareds.png" width={200} height={100} alt="image jaredslandscape"/>
            <div className="flex flex-col items-center briefcase-btn">
              <Image alt="arrow up icon" src="/icons/arrow_up_white.svg" width={10} height={10}/>
              <span className="text-white">Ver más</span>
            </div>
          </div>
          <div id="shop" className="briefcase-item-h briefcase-item mr-4">
            <h2 className="mt-2 ml-2 briefcase-item-title text-white">Shop Web</h2>
            <Image src="/img/shop.png" width={200} height={130} alt="image shopweb"/>
            <div className="flex flex-col items-center briefcase-btn">
              <Image alt="arrow up icon" src="/icons/arrow_up_white.svg" width={10} height={10}/>
              <span className="text-white">Ver más</span>
            </div>
          </div>
        </div>
        <div className="briefcase-items">
          <div className="briefcase-item-c briefcase-item mb-4">
          </div>
          <div id="organize" className="briefcase-item-c briefcase-item">
            <Image src="/img/organize.png" width={200} height={170} alt="image shopweb"/>
          </div>
        </div>
      </div>
    </section>
  )
}