import React from 'react'
import type { FC } from 'react'
import { Parallax } from 'react-scroll-parallax'

interface Props {
  xValues: number[]
}

const ParallaxSideEnter: FC<Props> = ({ xValues, children }) => {
  return (
    <Parallax x={xValues} tagOuter="figure">
      {children}
    </Parallax>
  )
}

export default ParallaxSideEnter
