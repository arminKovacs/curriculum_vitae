import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import image from '../images/iceberg.jpg'

const ParallaxImage = () => {
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
      }}
    />
  )
}

export default ParallaxImage
