import React from 'react'
import Bleft from '../assets/image/B-1.png'
import Bright from '../assets/image/B-2.png'
import ONGCLogo from '../assets/image/ongc.png'
import hallabolVideo from "../assets/Video/hallabol.mp4"
import { gamesList } from "./games";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="banner">
        <div className="left-banner">
            <img src={Bleft} alt="" />
            <Link to="/games">
                <button>Register Now</button>
            </Link>
        </div>
        <div className="right-banner">
            <img src={Bright} alt="" /> 
        </div>
    </div>

    <div className="section">
        <div className="about">
            <h2>Get ready for the ultimate <span className="about-span">11-day </span>extravaganza! Hallabol 11th edition is about to ignite the campus with non-stop action, thrill, and excitement. This is your chance to experience <span className="about-span">11 unforgettable nights</span> of pure fun and friendly competition. Get your game face on and join the party as the institute comes together for HallaBol - the most epic annual sports festival of all time! From  <span className="about-span">11th to 26th February</span>, get ready to mark your calendars and be a part of history. So, gear up for 11 nights of madness, <span className="about-span">11 games</span> of glory, and 11 days of memories that will last a lifetime! Let's do this!</h2>
        </div>

        <div className="powered-by">
            <div className="heading">
                <h1>Powered by</h1>
            </div>
            <img src={ONGCLogo} alt=""/>
        </div>

        <div className="hallabol-video">
            <video style={{ maxWidth: "100%"}}
            playsInline
            loop
            muted
            controls
            autoPlay
            alt="All the devices" 
            src={hallabolVideo}></video>
        </div>

        <div className="about">
            <h2>Mark your calendars for some of the best and happening nights at IITGN! Yes, we are talking about HallaBol - yayyy - will set the ground on fire from 11-16 Feb and 20-26 Feb! Here's to 11 nights that you will never forget!</h2>
        </div>

        <div style={{ marginTop: "100px" }}>
            <div className="heading">
                <h1>Featured Sports So Far!</h1>
            </div>
        </div>

        <div className="games">
           {gamesList.map((game, index) => (
                <Link key={index} className='blogItem-link' to={`/games${game.Link}`}>
                    <div className="game-item" key={index}>
                        <div className="image-card">
                            <img src={game.Images} />
                        </div>
                        <div className="game-item-caption">
                            <p>{game.GameName}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div> 
        
    </div>
    </>
  )
}
export default Home
