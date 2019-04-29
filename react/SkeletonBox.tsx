import React, { FunctionComponent } from 'react'

import SkeletonPiece from './SkeletonPiece'

const SkeletonBox: FunctionComponent<Props> = ({
  children,
  maxWidthStep,
  shouldAllowGrowing,
  shouldShowLowerButton,
}) => {
  const widthClass = maxWidthStep ? `mw${maxWidthStep}-ns` : ''
  const flexClass = shouldAllowGrowing ? 'flex-auto' : 'flex-none'

  return (
    <div className={`pb5 pr5-ns ${flexClass} ${widthClass}`}>
      <article className="ba bw1 b--muted-5 br2 h-100 flex flex-column justify-between">
        <main className="ph7 pv6">{children}</main>
        {shouldShowLowerButton && (
          <footer className="flex justify-end ph7 pb6 pt3">
            <SkeletonPiece width="50" size="4" />
          </footer>
        )}
      </article>
    </div>
  )
}

SkeletonBox.defaultProps = {
  shouldAllowGrowing: false,
}

interface Props {
  maxWidthStep?: number
  shouldAllowGrowing?: boolean
  shouldShowLowerButton?: boolean
}

export default SkeletonBox
