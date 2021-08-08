import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import image from '../images/pexels-eberhard-grossgasteiger-844297.jpg'

const ParallaxImage = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: image,
          amount: 1,
          children: 'img',
        },
      ]}
      style={{
        height: '300px',
      }}
    />
  )
}

export default ParallaxImage
