import React from 'react'
import Akhilesh from '../assets/team/Akhilesh.jpg'
import AmanChaudhary from "../assets/team/AmanChaudhary.jpg"
import Mahesh from "../assets/team/Mahesh.jpg"
import ShriyashMandvekar from "../assets/team/ShriyashMandvekar.jpg"
import SaherSoni from "../assets/team/SaherSoni.jpg"
import Saksham from "../assets/team/Saksham.jpg"
import Soham from "../assets/team/Soham.jpg"
import AmanSamaria from "../assets/team/AmanSamaria.jpg"
import Virender from "../assets/team/Virender.jpg"
import Shubh from "../assets/team/Shubh.jpg"
import Abhishek from "../assets/team/Abhishek.jpg"
import Ayush from "../assets/team/Ayush.jpg"


const Team = () => {
  return (
    <>
      <div className="heading">
        <h1>Our Team</h1>
      </div>
      <div className="section">
        <div className="team-heading">
            <h3>Sports Secretary</h3>
        </div>

        <div className="our-team">
          <div className="team-item">
            <img src={Akhilesh} />
            <div className="team-item-caption">
              <p>Akhilesh Chauhan</p>
              <a className='contact-details' href='mailto:sports.secretary@iitgn.ac.in '>sports.secretary@iitgn.ac.in </a>
              <p style={{color:"#f00"}}>Contact Number: 8689854792</p>
            </div>
          </div>
        </div>

        <div className="team-heading">
          <h3>Convenor</h3>
        </div>
      
        <div className="our-team">
          <div className="team-item">
            <img src={Abhishek} />
            <div className="team-item-caption">
              <p>Abhishek Janagal</p>
              <a className='contact-details' href='mailto:janagal.a@iitgn.ac.in'>janagal.a@iitgn.ac.in</a>
              <p style={{color:"#f00"}}>Contact Number: 8307766337</p>
            </div>
          </div>

          <div className="team-item">
            <img src={Shubh} />
            <div className="team-item-caption">
              <p>Shubh Lavti</p>
              <a className='contact-details' href='mailto:sunil.sl@iitgn.ac.in'>sunil.sl@iitgn.ac.in</a>
              <p style={{color:"#f00"}}>Contact Number: 9664744729</p>
            </div>
          </div>    
        </div>

        <div className="team-heading">
          <h3>Core Members</h3>
        </div>

        <div className="our-team">
          <div className="team-item">
            <img src={AmanSamaria} />
            <div className="team-item-caption">
              <p>Aman Samria</p>
            </div>
          </div>
          <div className="team-item">
            <img src={Saksham}/>
            <div className="team-item-caption">
              <p>Saksham Dhaania</p>
            </div>
          </div>
          <div className="team-item">
            <img src={SaherSoni} />
            <div className="team-item-caption">
              <p>Saher Soni</p>
            </div>
          </div>
          <div className="team-item">
            <img src={Soham} />
            <div className="team-item-caption">
              <p>Soham Shirodkar</p>
            </div>
          </div>
          <div className="team-item">
            <img src={Virender} />
            <div className="team-item-caption">
              <p>Virender Singh</p>
            </div>
          </div>            
        </div>

        <div className="team-heading">
          <h3>Web-Dev Team</h3>
        </div>

        <div className="our-team">
          <div className="team-item">
            <img src={AmanChaudhary} />
            <div className="team-item-caption">
              <p>Aman Chaudhary</p>
            </div>
          </div>
          <div className="team-item">
            <img src={Ayush} />
            <div className="team-item-caption">
              <p>Ayush Kushwah</p>
            </div>
          </div>
          <div className="team-item">
            <img src={Mahesh} />
            <div className="team-item-caption">
              <p>Mahesh Dange</p>
            </div>
          </div>
          <div className="team-item">
            <img src={ShriyashMandvekar} />
            <div className="team-item-caption">
              <p>Shriyash Mandvekar</p>
            </div>
          </div>            
        </div>

      </div>
    </>
  )
}

export default Team
