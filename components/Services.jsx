import CardServices from "./CardSservices";

export default function Services(){

  const services = [
    {
      title: 'Web Development',
      info: 'Development, planning and web development for your business, store, etc.',
      img: 'development.svg'
    },
    {
      title: 'Web Design',
      info: 'Nice and adaptable design for all devices.',
      img: 'design.svg'
    },
    {
      title: 'SEO',
      info: 'Organic and inorganic positioning of your site or platform.',
      img: 'seo.svg'
    },
    {
      title: 'Web Hosting',
      info: 'Configuration and hosting on the server of your site and creation of emails.',
      img: 'hosting.svg'
    }
  ]

  return(
    <section id="services" className="w-full h-screen bg-black flex flex-col justify-center items-center">
      <h2 className="text-white mb-16">Services</h2>
      <div className="card-container">
      {services.map( service => (
        <CardServices key={service.title} title={service.title} info={service.info} img={service.img}/>
      ))}
      </div>
    </section>
  )
}