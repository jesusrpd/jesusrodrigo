export default function Briefcase (){
  return(
    <section className="briefcase w-full h-screen bg-black">
      <h2 className="text-white mb-16">BRIEFCASE</h2>
      <div className="briefcase-container">
        <div className="briefcase-item-v briefcase-item mr-4">

        </div>
        <div className="briefcase-items">
          <div className="briefcase-item-h briefcase-item mb-4 mr-4"></div>
          <div className="briefcase-item-h briefcase-item mr-4"></div>
        </div>
        <div className="briefcase-items">
          <div className="briefcase-item-c briefcase-item mb-4"></div>
          <div className="briefcase-item-c briefcase-item"></div>
        </div>
      </div>
    </section>
  )
}