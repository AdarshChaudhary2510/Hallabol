import React from 'react'
import ONGCLogo from '../assets/image/ongc.png'
import JBSportsLogo from '../assets/image/jb.png'

const Sponsors = () => {
  return (
    <>
      <div className="heading">
        <h1>Our Sponsors</h1>
      </div>

      <div className="section">
        <div className="sponsors-logo">
          <img src={ONGCLogo} alt="" />
        </div>
        <div className="sponsors-para">
          <p>ONGC is a leading global energy company based in India, with a diverse portfolio of activities in exploration, production, and refining of oil and gas. With a history of more than six decades of continuous growth, ONGC is committed to creating value and contributing to India's energy security.</p>
          <p>ONGC is not only dedicated to the exploration and production of oil and gas, but also to sustainable development and social responsibility. They believe in making a difference in society and have implemented initiatives in areas such as health, education, and environmental conservation. ONGC has been recognized for their contributions to society and has received several awards for their efforts in these areas.</p>
          <p>ONGC is a diversified company that operates across the entire oil and gas value chain, from exploration and production to refining and marketing. They have expertise in both onshore and offshore operations, and have expanded their business to include renewable energy sources. ONGC's portfolio also includes petrochemicals, power, and other value-added products and services.</p>
          <p>To learn more about ONGC and their products and services, visit their website at <a href='https://www.ongcindia.com/' target="_blank" rel="noreferrer">www.ongcindia.com</a>. You can also follow them on social media for the latest updates and news.</p>          
        </div>
        <div className="sponsors-logo">
          <img src={JBSportsLogo} alt="" />
        </div>
        <div className="sponsors-para">
          <p>JB Sports has been a valuable partner, providing us with high-quality sports equipment and gear that has helped make our event a success. Their dedication to providing excellent products and services to the community is evident in their commitment to supporting our event. We are proud to have JB Sports as a sponsor.
          </p>
        </div>
      </div>
    </>
  )
}

export default Sponsors
