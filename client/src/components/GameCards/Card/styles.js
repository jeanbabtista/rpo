import { motion } from 'framer-motion'
import styled from 'styled-components'

export const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`

export const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  background: ${(props) => `linear-gradient(${props.graddeg}deg, ${props.gradfrom} 0%, ${props.gradto} 74%);`}
  color: #fff;
  position: relative;
  cursor: grab;
`

export const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`

export const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background: ${(props) => `linear-gradient(${props.graddeg}deg, ${props.gradfrom} 0%, ${props.gradto} 74%);`}
  border-radius: 50%;
`

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`

export const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`

export const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Icon = styled(motion.div)`
  width: auto;
  height: 210px;
  z-index: 99;
  user-select: none;
  margin-right: 7em;
  margin-top: 4em;
  img {
    height: 220px;
    width: 220px;
    object-fit: cover;
    user-select: none;
    border-radius: 50%;
  }
`
