import React from 'react'
import { useMotionValue, useTransform } from 'framer-motion'

// styles
import { CardWrapper, CardContainer, CircleWrapper, BottomContainer, Circle, TopContainer, IconWrapper, Icon } from './styles'

// components
import Details from './Details'

const Card = ({ icon, label, bgGradDeg, bgGradFrom, bgGradTo, circleGradDeg, circleGradFrom, circleGradTo }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        graddeg={bgGradDeg}
        gradfrom={bgGradFrom}
        gradto={bgGradTo}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle graddeg={circleGradDeg} gradfrom={circleGradFrom} gradto={circleGradTo} />
          </CircleWrapper>
          <IconWrapper>
            <Icon style={{ x, y, rotateX, rotateY, z: 100000 }} drag dragElastic={0.12} whileTap={{ cursor: 'grabbing' }}>
              <img src={icon} alt={label} />
            </Icon>
          </IconWrapper>
        </TopContainer>

        <BottomContainer>
          <Details label={label} />
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  )
}

export default Card
