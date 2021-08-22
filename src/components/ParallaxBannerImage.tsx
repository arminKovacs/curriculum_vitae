import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import image from '../images/iceberg.jpg'

const ParallaxBannerImage = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: image,
          amount: 0.5,
          children: 'img',
        },
      ]}
      style={{
        height: '500px',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 25px 50px -12px',
      }}
    />
  )
}

export default ParallaxBannerImage
