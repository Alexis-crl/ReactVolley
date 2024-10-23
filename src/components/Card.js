import React from 'react'

function Card(props) {


  return (
    <div className='card'>
      <p className='cardPos'>{props.pos}</p>
      <div className='cardImage'>
        <img src='https://plus.unsplash.com/premium_photo-1661963404614-74802f16a7a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dm9sbGV5fGVufDB8fDB8fHww' />
      </div>
      <div className='cardContent'>
        <div className='cardDate'>
          <h3>{props.date}</h3>
          <h3>{props.heure}</h3>
        </div>
        <div className='cardInfo'>
          <h4>Equipe adverse : <br/>{props.equipe}</h4>
        </div>
      </div>

      
    </div>
  )
}

export default Card