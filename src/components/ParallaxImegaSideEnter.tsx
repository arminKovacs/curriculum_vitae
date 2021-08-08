import React from 'react'
import type { FC } from 'react'
import { Parallax } from 'react-scroll-parallax'

interface Props {
  xValues: number[]
}

const ParallaxImegaSideEnter: FC<Props> = ({ xValues }) => {
  return (
    <Parallax className="custom-class" x={xValues} tagOuter="figure">
      <img src="https://source.unsplash.com/random" />
    </Parallax>
  )
}

export default ParallaxImegaSideEnter
