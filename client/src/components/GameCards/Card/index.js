import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../App'

// styles
import { CardContainer, CircleWrapper, BottomContainer, Circle, TopContainer, IconWrapper, Icon } from './styles'
import { Link } from '@mui/material'

// components
import Details from './Details'

const Card = ({ icon, label, link: _link, bgGradDeg, bgGradFrom, bgGradTo, circleGradDeg, circleGradFrom, circleGradTo }) => {
  const navigate = useNavigate()
  const { routes } = useContext(Context)
  const link = `${routes.games}/${_link}`

  return (
    <CardContainer whileHover={{ scale: 1.05 }} graddeg={bgGradDeg} gradfrom={bgGradFrom} gradto={bgGradTo}>
      <TopContainer>
        <CircleWrapper>
          <Circle graddeg={circleGradDeg} gradfrom={circleGradFrom} gradto={circleGradTo} />
        </CircleWrapper>
        <IconWrapper>
          <Icon>
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
  )
}

export default Card
