import './style.global.css'

import React, { FunctionComponent } from 'react'

const SkeletonPiece: FunctionComponent<Props> = ({ width, size }) => (
  <div
    className={`bg-muted-5 w-${width} ${
      size ? `pa${size}` : 'h-100'
    } relative overflow-hidden`}
  >
    <div className="shimmer" />
  </div>
)

SkeletonPiece.defaultProps = {
  width: '100',
}

interface Props {
  width?:
    | '10'
    | '20'
    | '25'
    | '30'
    | '33'
    | '34'
    | '40'
    | '50'
    | '60'
    | '70'
    | '75'
    | '80'
    | '90'
    | '100'
    | 'third'
    | 'two-thirds'
  size?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
}

export default SkeletonPiece
