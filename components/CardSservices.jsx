import Image from "next/image"

export default function CardServices ({title, img, info}){
  return(
    <div className="card-item">
      <div className="card-img">
        <Image src={`/icons/${img}`} alt="icon of development" width={50} height={50}/>
      </div>
    <h2 className="card-title">{title}</h2>
    <p className="card-info">{info}</p>
    </div>
  )
}