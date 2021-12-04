// mui
import { styled } from '@mui/styles'
import { Box, Modal } from '@mui/material'

export const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -65%)',
  minWidth: 200,
  backgroundColor: theme.palette.signup,
  borderRadius: '8px',
  boxShadow: 24,
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

export const BoxForm = styled(Box)({
  marginTop: 3,
})

export const StyledModal = styled(Modal)({
  boxShadow: '24px',
})
