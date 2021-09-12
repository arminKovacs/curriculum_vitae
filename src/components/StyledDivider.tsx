import React from 'react'
import type { FC } from 'react'

interface Props {
  flip?: boolean
}

const StyledDivider: FC<Props> = ({ flip }) => {
  return (
    <div className="tilt" style={{ transform: flip ? 'rotate(180deg)' : 'rotate(0deg)', marginTop: flip ? 0 : -1 }}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
      </svg>
    </div>
  )
}

export default StyledDivider
