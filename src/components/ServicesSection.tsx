import React from 'react'
import {ServiceCards} from './ServiceCards'

export const ServicesSection = () => {
    const services = [
        {
            url:'https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*',
            title:'Order Online',
            description:'Stay home and order to your doorstep'
        },
        {
            url:'https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*',
            title:'Nightlife and Clubs',
            description:`Explore the city's top nightlide outlets`
        },
        {
            url:'https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*',
            title:'Dining',
            description:`View the city's favorite dining venues`
        }
    ]

  return (
    <div className='services-section'>
        {
            services.map((it)=>(<ServiceCards url={it.url} title={it.title} description={it.description}></ServiceCards>))
        }
    </div>
  )
}
