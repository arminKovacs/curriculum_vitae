import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import image from '../assets/mountain-fix.jpg'

const ParallaxBannerImage = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: image,
          amount: 0.5,
          expanded: true,
          children: 'img',
        },
      ]}
      style={{
        height: '400px',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 25px 50px -12px',
      }}
    />
  )
}

export default ParallaxBannerImage
