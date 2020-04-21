import React from 'react'

const Card = ({name, email, id }) => {
  // destructuring diretamente nos parametros da funcao
  // const {name, email, id } = props;
  return (
    <div className='tc bg-light-purple  dib br3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
      <div className='black'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
