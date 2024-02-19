import React from 'react'

interface IServiceCardProps{
    url:string;
    title:string;
    description:string;
}

export const ServiceCards = (props: IServiceCardProps) => {
  return (
    <div className='service-card-container'>
      <div className='service-card'>
        <img className='service-image' src={props.url} alt=''></img>
        <div className='service-details'>
          <h2 className='service-title'>{props.title}</h2>
          <p className='service-description'>{props.description}</p>
        </div>
      </div>
    </div>
  )
}
