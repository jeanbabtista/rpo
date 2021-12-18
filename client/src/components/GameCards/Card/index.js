import React from 'react'
import { useMotionValue, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// styles
import { CardWrapper, CardContainer, CircleWrapper, BottomContainer, Circle, TopContainer, IconWrapper, Icon } from './styles'
import { Link } from '@mui/material'

// components
import Details from './Details'

const Card = ({ icon, label, link, bgGradDeg, bgGradFrom, bgGradTo, circleGradDeg, circleGradFrom, circleGradTo }) => {
  const navigate = useNavigate()
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
        whileHover={{ scale: 1.05, cursor: 'grab' }}
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
              <Link onClick={() => navigate(link)}>
                <img src={icon} alt={label} />
              </Link>
            </Icon>
          </IconWrapper>
        </TopContainer>

        <BottomContainer>
          <Details label={label} link={link} />
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  )
}

export default Card
