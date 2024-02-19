import React from 'react'
import {Header} from './Header'
import {SearchSpace} from './SearchSpace'

export const HeaderSection = () => {
  return (
    <div className='header-section'>

      <Header/>
      <div className='logo'></div>
      <h3 className='tagline'>Discover the best food & drinks in Jaipur</h3>
      <SearchSpace></SearchSpace>
    </div>
  )
}
