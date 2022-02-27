import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@material-ui/core'
import { makeStyles } from '@mui/styles'
import Logo from 'components/MUI/Logo'
//make classes 

const useStyles = makeStyles({
  wrapper: {
    paddingTop: 64,
    display: 'flex',
    justifyContent: 'center',
  },

  formContainer: {
    width: 420,
    minHeight: 200,
    border: '1px solid #ccc',
    borderRadius: 2,
    backgroundColor:'white'
  }
})



function Accounts() {
  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.formContainer}>
        <Logo variant="div">Instagram</Logo>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Accounts