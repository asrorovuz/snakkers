import React from 'react'
import './Banner.css'
import banner from '../../assistant/banner.png'
import bannerLogo from '../../assistant/banner-logo.png'

const Banner = () => {
  return (
    <div className='d-flex banner'>
        <div className="banner-content">
            <img src={bannerLogo} alt="brand" />
            <h2><span>Stan Smith</span>, Forever!</h2>
            <button>Купить</button>
        </div>
        <div className="banner-img">
            <img src={banner} alt="banner img" />
        </div>
    </div>
  )
}

export default Banner