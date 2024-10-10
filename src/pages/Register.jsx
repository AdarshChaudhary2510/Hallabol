import React from 'react'
import { gamesList } from './games';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='main-container'>
        <div className="heading">
          <h1>Featured Sports So Far!</h1>
        </div>
        <div className="section">
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
    </div>
    
  )
}

export default Register
